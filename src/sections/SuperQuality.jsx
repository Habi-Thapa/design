import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            We Provide You
          </span>{" "}
          <br />
          <span className="text-coral-red inline-block mt-3">
            Super Quality
          </span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
          dolores sequi quos est aliquid neque praesentium, eveniet deleniti.
          Minima, harum accusamus. Ea sequi commodi quis, blanditiis fugiat
          dolor dicta quod.
        </p>
        <div className="mt-11">
          <Button label="Shop now" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain obj"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
