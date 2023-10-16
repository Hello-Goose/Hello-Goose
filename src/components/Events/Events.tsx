import { forwardRef } from "react";
import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsTablet from "./EventsTablet";
import TopLine from "./topLine";
import BottomLine from "./BottomLine";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex-center justify-cneter relative z-[-5] flex min-h-screen  flex-col justify-center overflow-hidden bg-background-event
       bg-cover bg-bottom   bg-no-repeat py-[3rem] md:pb-0 mobileL:pb-5"
    >
      <TopLine />
      <EventsMobile />
      <EventsDesktop />
      <EventsTablet />
      <BottomLine />
    </div>
  );
});

export default Events;
