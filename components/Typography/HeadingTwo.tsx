import classNames from "classnames";
import { Size } from "./types";

interface Props {
  children: React.ReactNode | React.ReactElement;
  dark?: boolean;
  size?: Size;
  className?: string;
}

export default function HeadingTwo({ dark, children, size, className }: Props) {
  return (
    <h2
      className={classNames(
        "whitespace-pre-line dark:text-blue",
        {
          "text-tuscan": dark,
          "text-pink": !dark,
          "text-2xl sm:text-4xl md:text-5xl": !size,
          "text-md xs:text-2xl md:text-6xl": size === "sm",
        },
        className
      )}
    >
      {children}
    </h2>
  );
}