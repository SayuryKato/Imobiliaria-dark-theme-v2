import { CircleDotDashed } from "lucide-react";

interface CardAboutProps {
  title: string;
  description: string;
}

const CardAbout = ({ title, description }: CardAboutProps) => {
  return (
    <div className="border border-primary/50 p-4 w-full gap-2 rounded-xs hover:bg-primary/10 hover:border-b-primary">
      <div>
        <CircleDotDashed size={16} className="text-primary/50" />
        <h3 className="font-title text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default CardAbout;
