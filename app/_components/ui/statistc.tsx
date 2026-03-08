import CardStatistic from "./card-statistic";

const Statistic = () => {
  return (
    <div className="flex justify-around h-52 items-center bg-secondary text-white p-5">
      <CardStatistic title="M² ENTREGUES" value="180K" />
      <CardStatistic title="Anos de atuação" value="15" />
      <CardStatistic title="em VGV Total" value="R$35M" />
      <CardStatistic title="Imóveis vendidos" value="1000+" />
      <CardStatistic title="Clientes satisfeitos" value="95%" />
    </div>
  );
};

export default Statistic;
