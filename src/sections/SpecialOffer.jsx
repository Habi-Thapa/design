import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"></span>{" "}
          <br />
          <span className="text-coral-red inline-block mt-3">special</span>{" "}
          Offers.
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nam
          recusandae expedita et hic error asperiores aspernatur sit! Fugiat
          iure id doloremque veniam ex totam .
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          dolores sequi quos est aliquid neque praesentium, eveniet deleniti.
          Minima, harum accusamus. Ea sequi commodi quis, blanditiis fugiat
          dolor dicta quod.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" />
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
