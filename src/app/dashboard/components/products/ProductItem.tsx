import { EllipsisIcon } from "lucide-react";
import { FC } from "react";

interface ProductItemProps {
  name: string;
  ingredients: string;
  photo: string;
  price: string;
}

const ProductItem: FC<ProductItemProps> = ({ name, ingredients, photo, price }) => {
  return (
    <li>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <img
            className="w-20 h-20 object-cover rounded-2xl border border-gray-200 shadow-sm p-1"
            src={photo}
          />
          <div className="flex flex-col">
            <h2 className="font-bold">{name}</h2>
            <p className="text-gray-400 max-w-lg text-xs font-medium min-w-lg">
              {ingredients}
            </p>
          </div>
        </div>

        <div className="text-sm font-bold">
            { price }
        </div>

        <div className="cursor-pointer transition-all rounded-full p-1 hover:bg-gray-100">
          <EllipsisIcon size={20} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
