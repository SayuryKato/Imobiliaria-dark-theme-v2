import CardStatistic from "./card-statistic";

const Statistic = () => {
  return (
    <div
      className="
      grid grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-5 
      gap-6
      items-center 
      bg-secondary 
      text-white 
      p-6
    "
    >
      <CardStatistic title="M² ENTREGUES" value="180K" />
      <CardStatistic title="Anos de atuação" value="15" />
      <CardStatistic title="em VGV Total" value="R$35M" />
      <CardStatistic title="Imóveis vendidos" value="1000+" />
      <CardStatistic title="Clientes satisfeitos" value="95%" />
    </div>
  );
};

export default Statistic;
