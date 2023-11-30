import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {/* renderizar os produtos */}
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <span>{product.quantity}</span>
        </div>
      ))}
    </div>
  );
};
