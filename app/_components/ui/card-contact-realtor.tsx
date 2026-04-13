"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./button";
import { openWhatsApp } from "../_utils/whatsapp";
interface CardContactRealtorProps {
  name: string;
  phone: string;
  description: string;
  imageUrl: string;
}

const CardContactRealtor = ({
  name,
  phone,
  description,
  imageUrl,
}: CardContactRealtorProps) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-primary/20">
      <div className="flex gap-4 items-center">
        <div className="rounded-full w-15 h-15 overflow-hidden relative border border-primary">
          <Image
            src={imageUrl}
            alt="Logo da Empresa"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          openWhatsApp(
            phone,
            `Olá ${name}, vi um imóvel e gostaria de mais informações!`,
          )
        }
      >
        <FaWhatsapp />
      </Button>
    </div>
  );
};

export default CardContactRealtor;
