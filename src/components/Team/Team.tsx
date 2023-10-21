import { HTMLAttributes, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TeamType } from "../../types";
import TeamDetails from "./TeamDetails";
import TeamList from "./TeamList";

type TeamProps = HTMLAttributes<HTMLDivElement>;

const Team = forwardRef<HTMLDivElement, TeamProps>(
  ({ className, ...props }, ref) => {
    const [previewTeamType, setPreviewTeamType] = useState<
      TeamType | undefined
    >(undefined);

    const handlePreviewTeamType = (team: TeamType) => {
      setPreviewTeamType(team);
    };

    return (
      <div
        className={twMerge(
          "flex-center-col z-1 relative min-h-screen w-full  bg-background-team bg-cover bg-center bg-no-repeat pb-8",
          className,
        )}
        {...props}
        ref={ref}
      >
        <img
          className=" absolute top-[10%] w-screen "
          src="/images/team/cloud.png"
          alt=""
        />
        <img
          className="absolute top-0 w-screen bg-top "
          src="/images/team/topTone.png"
          alt=""
        />
        <img
          className="absolute bottom-0 w-screen"
          src="/images/team/background.png"
          alt=""
        />
        <div className="z-[99] p-4 sm:p-8">
          <TeamDetails team={previewTeamType} />
        </div>
        <div className="my-4 sm:my-8" />
        <TeamList
          onPreview={handlePreviewTeamType}
          previewTeamType={previewTeamType}
        />
      </div>
    );
  },
);

export default Team;
