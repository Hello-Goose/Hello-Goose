import { forwardRef } from "react";
import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsTablet from "./EventsTablet";
import TopLine from "./TopLine";
import BottomLine from "./BottomLine";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="relative flex flex-col justify-center w-full min-h-screen overflow-hidden bg-bottom bg-no-repeat bg-cover flex-center justify-cneter bg-background-event md:pb-0 "
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
