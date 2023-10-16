import { twMerge } from "tailwind-merge";
import { TeamType } from "../../types";

type TeamItemProps = {
  team: TeamType;
  isPreview?: boolean;
};

const TeamItem = ({ team, isPreview = false }: TeamItemProps) => {
  return (
    <div
      className={twMerge(
        "relative mx-auto flex aspect-square cursor-pointer flex-col items-center justify-end rounded-2xl py-4 shadow-lg transition-all duration-300 xl:h-64 xl:w-auto",
        isPreview ? "bg-[#0F0A4CCC]" : "bg-[#6479BCE5]",
      )}
    >
      <img
        src={team.image}
        alt={team.name}
        className="absolute bottom-[35%] h-full w-full max-w-none transform drop-shadow-lg filter lg:max-w-[80rem]"
      />
      <h3 className="z-10 whitespace-nowrap text-[14px] font-bold text-white lg:text-[24px] xl:text-[32px]">
        {team.name}
      </h3>
    </div>
  );
};

export default TeamItem;
