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

      <div className="w-full lg:w-3/10 h-100 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3310.4163704531616!2d-46.53063052502226!3d-23.527856160361456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDMxJzQwLjMiUyA0NsKwMzEnNDEuMCJX!5e1!3m2!1spt-BR!2sbr!4v1776531449923!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default AboutLocalization;
