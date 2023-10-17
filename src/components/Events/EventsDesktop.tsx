import Days from "./Days";
import GenerateFlower from "./GenerateFlower";

const EventsDesktop = () => {
  const flowers = [
    { position: "left-[-10%] top-[16%] w-[15%]", colorFlower: "pink" },
    { position: "right-[1%] top-[5%] w-[14%]", colorFlower: "orange" },
    { position: "bottom-[32%] right-[2%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[33%] left-[-5%] w-[16%]", colorFlower: "purple" },
  ];
  const days = [
    { position: "bottom-[2%] right-[-12%]", day: "Graduation" },
    { position: "bottom-[45%] right-[-15%] ", day: "gooseDay" },
    { position: "left-[5%] top-[5%]", day: "registerDay" },
    { position: "bottom-[8%] left-[-5%]", day: "finalDay" },
  ];
  return (
    <div className="relative my-auto hidden scale-[75%] items-center justify-center md:block lg:top-[-20px] TabletV:hidden">
      <img className="mx-auto " src="/images/events/platform.png" alt="" />
      <GenerateFlower flowers={flowers} />
      {days.map(({ position, day }) => (
        <Days day={`${day}`} className={`${position}`} />
      ))}
    </div>
  );
};

export default EventsDesktop;
