import Days from "./Days";
import GenerateFlower from "./GenerateFlower";

const EventsDesktop = () => {
  const flowers = [
    { position: "left-[-10%] top-[16%] w-[15%]", colorFlower: "pink" },
    { position: "right-[-20%] top-[5%] w-[14%]", colorFlower: "orange" },
    { position: "bottom-[32%] right-[-20%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[33%] left-[-32%] w-[17%]", colorFlower: "purple" },
  ];
  const days = [
    { position: "bottom-[2%] right-[-12%]", day: "Graduation", delay: 1 },
    { position: "bottom-[45%] right-[-15%] ", day: "gooseDay", delay: 3 },
    { position: "left-[5%] top-[5%]", day: "registerDay", delay: 5 },
    { position: "bottom-[8%] left-[-5%]", day: "finalDay", delay: 4 },
  ];
  return (
    <div className="relative my-auto hidden scale-[80%] items-center justify-center md:block lg:top-[-20px] TabletV:hidden">
      <img className="mx-auto " src="/images/events/platform.png" alt="" />
      <GenerateFlower flowers={flowers} />
      {days.map(({ position, day, delay }) => (
        <Days day={`${day}`} className={`${position}`} delay={delay} />
      ))}
    </div>
  );
};

export default EventsDesktop;
