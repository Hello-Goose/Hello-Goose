import GenerateDay from "./componentsEvent/GenerateDay";
import GenerateFlower from "./componentsEvent/GenerateFlower";

const EventsDesktop = () => {
  const flowers = [
    { position: "left-[-10%] top-[16%] w-[15%]", colorFlower: "pink" },
    { position: "right-[-20%] top-[5%] w-[14%]", colorFlower: "orange" },
    { position: "bottom-[32%] right-[-20%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[33%] left-[-32%] w-[17%]", colorFlower: "purple" },
  ];
  const days = [
    { position: "bottom-[2%] right-[-12%]", day: "graduation" },
    { position: "bottom-[45%] right-[-15%] ", day: "gooseDay" },
    { position: "left-[5%] top-[5%]", day: "registerDay" },
    { position: "bottom-[8%] left-[-5%]", day: "finalDay" },
  ];
  return (
    <div className="relative  my-auto  hidden scale-[65%] items-center justify-center md:block lg:top-[-20px] TabletV:hidden">
      <img
        className="mx-auto "
        src="/images/events/platformDesktop.png"
        alt="platform"
      />
      <GenerateFlower flowers={flowers} />
      <GenerateDay days={days} />
    </div>
  );
};

export default EventsDesktop;
