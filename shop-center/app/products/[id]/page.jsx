import allProducts from "@/app/data/allProducts";

const page = ({ params: { id } }) => {
  const product = allProducts.find(product => product.id == id);
  console.log(product);

  return (
    <div>
      fasf
    </div>
  );
};

export default page;