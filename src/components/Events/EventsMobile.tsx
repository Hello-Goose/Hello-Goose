import GenerateFlower from "./componentsEvent/GenerateFlower";
import GenerateDay from "./componentsEvent/GenerateDay";
const EventsMobile = () => {
  const flowers = [
    { position: "left-[-16%] top-[-14%] w-[17%]", colorFlower: "pink" },
    { position: "right-[-10%] top-[0%] w-[15%]", colorFlower: "orange" },
    { position: "bottom-[37%] right-[-4%] w-[16%]", colorFlower: "pink" },
    { position: "bottom-[4%] left-[-10%] w-[20%]", colorFlower: "purple" },
  ];
  const days = [
    { position: "bottom-[2%] right-[-12%] w-[50%]", day: "graduation" },
    { position: "bottom-[18%] left-[-17%] w-[50%] ", day: "gooseDayM" },
    { position: "left-[-10%] top-[-5%]", day: "registerDay" },
    { position: "top-[15%] right-[0%] w-[55%]", day: "announceDayM" },
  ];
  return (
    <div className="flex-center relative h-max scale-[75%] md:hidden">
      <img
        className="mx-auto "
        src="/images/events/platformMobile.png"
        alt="platform"
      />
      <GenerateFlower flowers={flowers} />
      <GenerateDay days={days} />
    </div>
  );
};

export default EventsMobile;
