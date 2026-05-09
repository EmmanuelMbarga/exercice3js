import Image from "next/image";
import React from "react";
import { TextSplitter } from "./textslitter";

export default function Section2() {
  return (
    <section className="grid place-items-center h-screen">
      <div className="grid place-items-center text-side relative z-80 md:grid-cols-2">
        <Image
          src="/images/all-cans-bunched.png"
          alt="try all flavors"
          width={600}
          height={600}
          className="w-full md:hidden"
        />
        <div>
          <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl ">
            <TextSplitter text="Try all five flavors"/>
          </h2>
          <p className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
            our soda is made with real fruit juice and a touch of cane sugar. We
            never
          </p>
        </div>
      </div>
    </section>
  );
}
