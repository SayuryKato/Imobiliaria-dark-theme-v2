import { MapPinned } from "lucide-react";
import { Button } from "./button";
import { StaticMap } from "./static-map";
import Link from "next/link";

const AboutLocalization = () => {
  return (
    <div className="bg-black border border-t-primary/50 p-6 flex justify-center gap-5 items-center h-140 lg:flex-row flex-col">
      <section className="w-full flex flex-col gap-4 items-start h-full justify-center lg:w-3/10">
        <div className="text-primary flex gap-4 item-center">
          <MapPinned />
          <h2 className="text-2xl font-title">Nossa Localização</h2>
        </div>
        <p className="text-gray-300">
          Estamos localizados em uma área privilegiada, com fácil acesso a
          infraestrutura e comodidades. Atuamos nos melhores bairros da capital
          paulista, com empreendimentos estrategicamente localizados perto de
          comércio, lazer, transporte e natureza. Nossa equipe está pronta para
          te guiar.
        </p>

        <Button variant={"outline"} asChild>
          <Link
            href={`https://www.google.com/maps?q=-23.5278642,-46.5280499`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero conhecer o local
          </Link>
        </Button>
      </section>

      <section className="h-100 flex items-center justify-center">
        <a
          href={`https://www.google.com/maps?q=-23.5278642,-46.5280499`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticMap />
        </a>
      </section>
    </div>
  );
};

export default AboutLocalization;
