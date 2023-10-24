import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export const Header = () => {
  return (
    <div>
      <Card className="flex justify-between p-[1.875rem]">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>

        <h1 className="text-lg font-semibold">
          <span className="from-primary bg-gradient-to-r to-purple-500 bg-clip-text font-black text-transparent">
            Devdex
          </span>{" "}
          Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    </div>
  );
};
