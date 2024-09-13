import { cva, type VariantProps } from "class-variance-authority";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import {
  ComponentPropsWithoutRef,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";

import cn from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center gap-2 rounded-full transition-all duration-300 group",
  {
    variants: {
      variant: {
        primary:
          "bg-black px-[22px] py-[14px] hover:bg-white border border-black hover:border-black hover:text-black text-base text-white disabled:text-white disabled:bg-neutral-300",
        secondary:
          "bg-transparent border border-black px-[22px] py-[14px] hover:bg-black hover:text-white text-base text-black disabled:text-white disabled:bg-neutral-300",
      },
    },
  }
);

interface LinkButtonProps
  extends NextLinkProps,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  href: string;
  scroll?: boolean;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  download?: boolean;
  disabledProgressBar?: boolean;
}

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Link({
  children,
  href,
  variant,
  className,
  target,
  scroll,
  download,
  disabledProgressBar,
  ...props
}: Readonly<LinkButtonProps>) {
  return (
    <NextLink
      href={href}
      className={cn(buttonVariants({ variant }), className)}
      target={target}
      scroll={scroll}
      download={download}
      data-disable-nprogress={disabledProgressBar}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export function Button({
  children,
  type,
  onClick,
  className,
  variant,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
