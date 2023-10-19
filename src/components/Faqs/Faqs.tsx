import { forwardRef } from "react";
import FaqBox from "./FaqBox";

const Faqs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="relative w-full h-full min-h-screen lg:min-h-[110vh] py-6 bg-center bg-no-repeat bg-cover bg-background-faqs mobileL:bg-top TabletV:bg-center lg:pt-[8rem] pt-10"
    >
      <div className="mx-5 md:mx-32 lg:mx-56 xl:mx-auto xl:max-w-[60rem]">
        <div className="mb-5  flex justify-center text-[2rem] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] xl:text-[4rem] mobileL:text-[28px] ">
          FAQs
        </div>
        <FaqBox />
      </div>
      <img
        className="absolute bottom-0 w-screen"
        src="/images/faqs/bottomLine.svg"
        alt=""
      />
    </div>
  );
});

export default Faqs;
