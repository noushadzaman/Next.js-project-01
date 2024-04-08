import PhotoDetails from "@/components/PhotoDetails";

export default function page({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
