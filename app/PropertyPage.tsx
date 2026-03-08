import Image from "next/image";
import img03 from "../public/images/img03.jpg";
import Filter from "./_components/ui/filter";
import SectionProperty from "./_components/ui/section-property";
import Footer from "./_components/ui/footer";
const PropertyPage = () => {
  return (
    <div>
      <div className="relative w-full h-150">
        <Image
          src={img03}
          alt={"Image 03"}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> */
        <Filter />
      </div>
      <SectionProperty visibleButton={false} />
      <Footer />
    </div>
  );
};

export default PropertyPage;
