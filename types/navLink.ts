import { LinkProps } from "next/link";
import { ReactNode, MouseEventHandler } from "react";

export interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}