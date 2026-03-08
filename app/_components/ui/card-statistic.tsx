interface CardStatisticProps {
    title: string;
    value: string | number;
}

const CardStatistic = ({ title, value }: CardStatisticProps) => {
    return (
        <div className="flex flex-col gap-5 p-4 w-full hover:border-b-2 border-primary transition">
            <h1 className="text-primary font-title text-4xl">{value}</h1>
            <p className="font-body">{title}</p>
        </div>
    );
}
 
export default CardStatistic;