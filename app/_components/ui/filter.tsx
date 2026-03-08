import { Button } from "./button";
import FilterSelect from "./filter-select";

const Filter = () => {
  return (
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-md p-8 rounded-xl w-9/10 max-w-5xl border border-primary/50">
      <div className="flex gap-4 justify-center items-center">
        <FilterSelect placeholder="Tipo de Imóvel"/>
        <FilterSelect placeholder="Bairro"/>
        <FilterSelect placeholder="Quartos"/>
        <FilterSelect placeholder="Banheiros"/>
        <FilterSelect placeholder="Vagas"/>
        <Button>Filtrar dados</Button>
      </div>
    </div>
  );
};

export default Filter;
