"use client";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scenario1 from "@/components/scenarios/scenario1";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const introTL = gsap.timeline();
    introTL
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power3.in",
        delay: 0.1,
        stagger: 1,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.4", //a chauqe fois qu'on va voire ce ci ou un directement un numéro, cela signifie que l'animation va se faire plus ou moins après 4 secondes par exemple ou en d'autres termes, l'animation doit attendre 4 secondes afin de se déclencher.
      )
      .from(
        ".hero-body ",
        {
          opacity: 0,
          y: 10,
        },
        "+=.0",
      )
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        ease: "back.out",
        duration: 0.6,
      });

    // ici on controlle le scroll sur la page
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    scrollTL
      .fromTo(
        "body",
        {
          backgroundColor: "#FDE047",
        },
        {
          backgroundColor: "#D9F99D",
          overwrite: "auto", //on utilise overwrite pour eviter que les autre animations ne soient écrasé
        },
        1,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        opacity: 0,
        y: 30,
      });
  });

  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center w-full hero opacity-0">
      <View className="hero-scene pointer-events-none sticky top-0 z-59 -mt-[100vh] hidden h-screen w-screen md:block">
        <Scenario1/>
      </View>
      <Section1 />
      <Section2 />
    </div>
  );
}
