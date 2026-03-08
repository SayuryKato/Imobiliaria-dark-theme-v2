import { Card, CardContent } from "./card";
import { navItems } from "@/app/_constants/navegation";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";

const Header = () => {
  return (
    <Card className="fixed top-0 left-0 z-20 w-full rounded-none border-none bg-white/5 shadow-md backdrop-blur-lg">
      <CardContent className="flex items-center justify-between">
        <div className="rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt="Logo da Empresa"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div>
          {navItems.map((items, index) => {
            const isLast = index === navItems.length - 1;

            return (
              <Button
                key={items.href}
                variant={isLast ? "default" : "link"}
                className={`cursor-pointer ${isLast ? "bg-primary text-white" : ""}`}
                asChild
              >
                <Link href={items.href}>{items.label}</Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
