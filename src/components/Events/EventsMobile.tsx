import GenerateFlower from "./GenerateFlower";

const EventsMobile = () => {
  const flowers = [
    { position: "left-0 top-[-5%] w-[12%]", colorFlower: "pink" },
    { position: "right-[5%] top-[5%] w-[10%]", colorFlower: "orange" },
    { position: "bottom-[32%] right-[11%] w-[11%]", colorFlower: "pink" },
    { position: "bottom-[4%] left-[6%] w-[15%]", colorFlower: "purple" },
  ];
  return (
    <div className="relative flex-center h-max md:hidden">
      <img className="w-[92%]" src="/images/events/eventMobile.png" alt="" />
      <GenerateFlower flowers={flowers}/>
    </div>
  );
};

export default EventsMobile;
