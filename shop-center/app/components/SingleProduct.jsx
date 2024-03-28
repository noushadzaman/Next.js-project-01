import Link from "next/link";
import calculatePrice from "../utils/priceCalculate";

const SingleProduct = ({ product }) => {
    const discountedPrice = calculatePrice(product?.price, product?.discountPercentage);

    return (
        <div>
            <div
                style={{ backgroundImage: `url(${product?.thumbnail})` }}
                className={`
                 relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform`}>
            </div>
            <h2 className="text-sm lg:text-base mt-2">
                <Link className="text-base font-bold" href={`/products/${product?.id}`}>
                    {product.title}
                </Link>
                <span className="text-[#919090]">
                    <Link href={`/`} >({product?.category})</Link>
                </span>
            </h2>
            <p className="text-[#919090] text-sm ">{product?.description}</p>
            <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">${product?.price}</span> ${discountedPrice}</p>
        </div>

    );
};

export default SingleProduct;