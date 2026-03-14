import Link from "next/link";
import { Button } from "./button";

const SectionHomeMessage = () => {
  return (
    <div className="bg-primary/10 text-black flex items-center justify-around p-6 h-100">
      <div>
        <h1 className="font-title font-light text-7xl leading-[1.1] tracking-wide">
          Pronto para encontrar o seu
          <br />
          <span className="text-primary italic">lar perfeito?</span>
        </h1>

        <p className="mt-6 max-w-lg text-sm text-gray-500 font-body">
          Nossa equipe de especialistas está disponível para atender você com
          toda a atenção que você merece.
        </p>
      </div>

      <Button asChild>
        <Link href="/Contact">
          Entre em contato conosco
        </Link>
      </Button>
    </div>
  );
};

export default SectionHomeMessage;
