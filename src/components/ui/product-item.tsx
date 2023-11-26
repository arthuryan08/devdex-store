import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import {
  ArrowDownIcon,
  StarHalfIcon,
  StarIcon,
  StarOffIcon,
} from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-3 top-3 px-2 py-[2px]">
              <ArrowDownIcon size={14} />
              {product.discountPercentage}%
            </Badge>
          )}

          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-full max-w-[80%] object-contain"
            alt={product.name}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            {product.discountPercentage > 0 ? (
              <>
                <p className="text font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="text-xs line-through opacity-60">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text font-semibold">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <StarIcon size={14} color="#8162ff" fill="#8162ff" />
            <StarIcon size={14} color="#8162ff" fill="#8162ff" />
            <StarIcon size={14} color="#8162ff" fill="#8162ff" />
            <StarIcon size={14} color="#8162ff" fill="#8162ff" />
            <StarIcon size={14} color="#8162ff" />
            <p className="text-xs opacity-60">(25)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
