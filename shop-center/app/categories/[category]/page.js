import CustomLink from "@/app/components/CustomLink";
import Products from "@/app/components/Products";

const page = ({ params: { category } }) => {
  return (
    <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
      <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
        <div>
          <CustomLink
            path={"/categories/all"}
            className="hover:border-b border-black block h-6 box-border mt-4"
          >
            All
          </CustomLink>
        </div>
        <div>
          <CustomLink
            path={"/categories/smartphones"}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Smartphones
          </CustomLink>
        </div>
        <div>
          <CustomLink
            path={"/categories/laptops"}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Laptops
          </CustomLink>
        </div>
        <div>
          <CustomLink
            path={"/categories/fragrances"}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Fragrances
          </CustomLink>
        </div>
        <div>
          <CustomLink
            path={"/categories/skincare"}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Skincare
          </CustomLink>
        </div>
        <div>
          <CustomLink
            path={"/categories/groceries"}
            className="hover:border-b border-black block h-6 box-border mt-5"
          >
            Groceries
          </CustomLink>
        </div>
      </div>
      <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
        <Products category={category} />
      </div>
    </div>
  );
};

export default page;
