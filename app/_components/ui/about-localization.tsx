import { MapPinned } from "lucide-react";
import { Button } from "./button";
import { StaticMap } from "./static-map";

const AboutLocalization = () => {
  return (
    <div className="bg-black border border-t-primary/50 p-6 flex justify-center gap-5 items-center">
      <div className="w-3/10 flex flex-col gap-4 items-start h-full">
        <div className="text-primary flex gap-4 item-center">
          <MapPinned />
          <h2 className="text-xl font-title">Nossa Localização</h2>
        </div>
        <p className="text-gray-300">
          Estamos localizados em uma área privilegiada, com fácil acesso a
          infraestrutura e comodidades. Atuamos nos melhores bairros da capital
          paulista, com empreendimentos estrategicamente localizados perto de
          comércio, lazer, transporte e natureza. Nossa equipe está pronta para
          te guiar.
        </p>

        <Button variant={"outline"}>Quero conhecer o local</Button>
      </div>

      <div className="h-100">
        <a
          href={`https://www.google.com/maps?q=-23.5278642,-46.5280499`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticMap />
        </a>
      </div>
    </div>
  );
};

export default AboutLocalization;
