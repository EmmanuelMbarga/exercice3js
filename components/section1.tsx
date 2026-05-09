
import Button from "./button";
import { TextSplitter } from "./textslitter";


export default function Section1() {


  return (
    <section>
      <div className="grid place-items-center h-screen">
        <div className="grid auto-rows-min place-items-center">
          <h1 className="hero-header text-7xl uppercase leading-[.8] md:text-[9rem] lg:text-[13rem] text-center text-orange-500">
            <TextSplitter
              text="live gutsy"
              wordDisplayStyle="block"
              className="hero-header-word"
            />
          </h1>
          <div className="hero-subheading  mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
            <p>soda perfected</p>
          </div>
          <div className="hero-body text-2xl font-normal text-sky-950">
            <p>3-5g sugar.9g fiber.5 delicious flavors</p>
          </div>
          <Button link="#" text="shop now" className="hero-button mt-12" />
        </div>
      </div>
    </section>
  );
}
