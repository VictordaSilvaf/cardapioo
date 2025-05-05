import { EllipsisIcon, PencilIcon } from "lucide-react";
import { FC } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface ProductItemProps {
  name: string;
  ingredients: string;
  photo: string;
  price: string;
}

const ProductItem: FC<ProductItemProps> = ({
  name,
  ingredients,
  photo,
  price,
}) => {
  return (
    <li>
    

      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3">
          <Image
            className="w-20 h-20 object-cover rounded-2xl border border-gray-200 p-1"
            src={photo}
            alt={name}
            width={80}
            height={80}
          />
          <div className="flex flex-col">
            <h2 className="font-bold">{name}</h2>
            <p className="text-gray-400 max-w-lg text-xs font-medium min-w-lg">
              {ingredients}
            </p>
          </div>
        </div>

        <div className="text-sm font-bold text-vermilion-600">{price}</div>

        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer transition-all rounded-full p-1 hover:bg-gray-100">
              <EllipsisIcon size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Visualizar</DropdownMenuItem>
              <DropdownMenuItem>Editar</DropdownMenuItem>
              <DropdownMenuItem>Deletar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
