import { HTMLMotionProps } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

type DaysProps = {
  day: string;
} & HTMLMotionProps<"img">;

const Days: React.FC<DaysProps> = ({ day, className }) => {
  return (
    <img
      className={twMerge("absolute w-[45%]", className)}
      src={`/images/events/${day}.png`}
      alt={`${day}`}
    />
  );
};

export default Days;
