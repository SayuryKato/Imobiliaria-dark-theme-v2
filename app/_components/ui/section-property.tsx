import CardProperty from "./card-property";
import { prisma } from "../../_lib/prisma";
import { Button } from "./button";
import Link from "next/link";

interface SectionPropertyProps {
  visibleButton?: boolean;
}
const SectionProperty = async ({
  visibleButton = true,
}: SectionPropertyProps) => {
  const properties = await prisma.property.findMany({
    include: {
      images: true,
    },
  });

  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center mt-8">
        {properties.map((property) => (
          <CardProperty key={property.id} property={property} />
        ))}
      </div>

      {visibleButton && (
        <div className="flex items-center justify-center mt-8">
          <Button className="mt-4 h-14 py-3 text-lg font-medium" asChild>
            <Link href="/Property">Ver todos os empreendimentos →</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default SectionProperty;
