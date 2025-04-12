import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {twMerge} from "tailwind-merge";

const buttonStyles = cva("transition-colors font-medium", {
  variants: {
    variant: {
      default: "bg-gray=200 text-black hover:bg-gray-300",
      ghost: "bg-transparent hover:bg-gray-100 text-black",
      dark: "bg-gray-800 text-gray-100 hover:bg-gray-900",
    },
    size: {
      default: "rounded px-4 py-2 text-sm",
      icon: "rounded-full w-10 h-10 flex items-center justify-center p-2.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;
const Button = ({ variant, size,className, ...props }: ButtonProps) => {
  return (
    <>
      <button
        {...props}
        className={twMerge(buttonStyles({ variant, size }), className)}
      />
    </>
  );
};
export default Button;
