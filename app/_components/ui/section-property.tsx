import CardProperty from "./card-property";
import { prisma } from "../../_lib/prisma";
import { Button } from "./button";

interface SectionPropertyProps {
  // Define any props if needed
  visibleButton?: boolean;
}
const SectionProperty = async ({
  visibleButton = true,
}: SectionPropertyProps) => {
  const properties = await prisma.property.findMany({});
  return (
    <div className="flex flex-col p-6 gap-4">
      <div>
        <p className="text-primary text-sm">PRÉ-LANÇAMENTOS</p>
        <h1 className="font-title font-light text-4xl leading-[1.1] tracking-wide text-black">
          Alta tecnologia,
          <br />
          <span className="text-primary italic">grande contato humano</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center mt-8">
        {properties.map((property) => (
          <CardProperty
            key={property.id}
            image={property.imagesUrl[0]}
            neighborhood="Vila Gomes Cardim"
            category="RESIDENCIAL MOEMA"
            title={property.title}
            address={property.address}
            area={220}
            bedrooms={3}
            parking={3}
            price="R$ 2.890.000"
          />
        ))}
      </div>

      {visibleButton && (
        <div className="flex items-center justify-center mt-8">
          <Button className="mt-4 h-14 py-3 text-lg font-medium ">
            Ver todos os empreendimentos →
          </Button>
        </div>
      )}
    </div>
  );
};

export default SectionProperty;
