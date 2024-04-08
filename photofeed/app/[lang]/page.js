import PhotoList from "@/components/photoList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return <PhotoList photos={photos} />;
}
