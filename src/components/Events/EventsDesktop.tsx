import GenerateFlower from "./GenerateFlower";

const EventsDesktop = () => {
  const flowers = [
    { position: "left-[7%] top-[16%] w-[10%]", colorFlower: "pink" },
    { position: "right-[1%] top-[5%] w-[9%]", colorFlower: "orange" },
    { position: "bottom-[32%] right-[2%] w-[12%]", colorFlower: "pink" },
    { position: "bottom-[33%] left-[-5%] w-[12%]", colorFlower: "purple" },
  ];
  return (
    <div className="relative hidden h-max items-center justify-center md:block TabletV:hidden">
      <img
        className="mx-auto w-[87%] xl:w-[60%]"
        src="/images/events/eventDesktop.png"
        alt=""
      />
      <GenerateFlower flowers={flowers} />
    </div>
  );
};

export default EventsDesktop;
