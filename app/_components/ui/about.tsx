import Image from "next/image";
import Img02 from "../../../public/images/img02.png";
import CardAbout from "./card-about";

const AboutUs = () => {
  return (
    <div className="bg-black flex justify-around p-6" id="about">
      <div className="relative w-1/2 min-h-155 overflow-hidden">
        <Image
          src={Img02}
          alt="About Us"
          fill
          className="mx-auto"
          objectFit="contain"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-l from-black via-black/40 to-transparent" />
      </div>
      <div className="flex flex-col justify-center items-start gap-4 w-5/10">
        <p className="text-primary text-sm">Sobre nós</p>
        <h1 className="font-title font-light text-7xl leading-[1.1] tracking-wide">
          Construímos mais do que imóveis: criamos
          <br />
          <span className="text-primary italic">histórias</span>
        </h1>

        <p className="mt-6 max-w-lg text-sm text-gray-500 font-body">
          Mais de 500 famílias já realizaram o sonho da casa própria com a New
          Home. Confira algumas histórias reais.
        </p>

        <div className="flex gap-4 w-full justify-between">
          <CardAbout
            title="Transparência"
            description="Processos claros e sem surpresas do início ao fim"
          />
          <CardAbout
            title="Excelência"
            description="Projetos entregues no prazo com padrão premium
          "
          />
          <CardAbout
            title="Proximidade"
            description="Consultores dedicados para cada cliente
          "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
