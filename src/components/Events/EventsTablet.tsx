import { useRef } from "react";
import GenerateFlower from "./GenerateFlower";

const EventsTablet = () => {
  const eventRef = useRef<HTMLDivElement>(null);
  const flowers = [
    { position: "left-[-2%] top-[32%] w-[14%]", colorFlower: "pink" },
    { position: "right-[1%] top-[25%] w-[13%]", colorFlower: "orange" },
    { position: "bottom-[23%] right-[-5%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[28%] left-[-13%] w-[18%]", colorFlower: "purple" },
  ];
  return (
    <div
      ref={eventRef}
      className="relative flex w-[90%]   md:hidden  mobileS:hidden TabletV:block"
    >
      <img
        className="z-1 "
        src="/images/events/eventTablet.png"
        alt="eventTablet"
      />
      <GenerateFlower flowers={flowers} />
    </div>
  );
};

export default EventsTablet;
