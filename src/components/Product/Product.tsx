import Button from "../shared/Button/Button";

type ProductProps = {
  ProductTitle: string;
  ProductImage: string;
  ProductPrice: number;
  ProductDescription: string;
  ProductAvailable: boolean;
};

const Product = ({
  ProductTitle,
  ProductImage,
  ProductPrice,
  ProductDescription,
  ProductAvailable,
}: ProductProps) => {
  return (
    <div className="w-80 border border-gray-200 shadow-sh1 rounded-md p-4 flex flex-col justify-between gap-5">
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center rounded-md overflow-hidden h-36">
          <img
            src={`./src/assets/images/${ProductImage}.webp`}
            alt={ProductImage}
          />
        </div>
        <h3 className="font-bold font-poppins-b">{ProductTitle}</h3>
        <h4 className="font-semibold text-sm">${ProductPrice} Millions</h4>
        <p className="font-semibold text-xs text-gray-500">
          {ProductDescription}
        </p>
      </div>
      <Button
        innerText={ProductAvailable ? "Buy Now" : "Out of Stock"}
        bgColor="blue-500"
        textColor="white"
        py="2"
      />
    </div>
  );
};

export default Product;
