import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SocialLinkProps = {
  href?: string;
  icon: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const SocialLink = ({ href, icon, className, ...props }: SocialLinkProps) => {
  return (
    <>
      {href && (
        <a href={href} target="_blank" rel="noreferrer">
          <button
            className={twMerge(
              "flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-pink-300 text-white transition duration-300 hover:bg-opacity-80 sm:h-[4rem] sm:w-[4rem]",
              className,
            )}
            {...props}
          >
            {icon}

            {!href && icon}
          </button>
        </a>
      )}
    </>
  );
};

export default SocialLink;
