import clsx from "clsx";
import React from "react";

interface ButtonProps {
  link: string;
  text: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      <button className={clsx("rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase cursor-pointer tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl", props.className)}>{props.text}</button>
    </div>
  );
}
