"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode, MouseEventHandler } from "react";

export interface NavLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...linkProps
}) => (
  <Link href={href} onClick={onClick} className={className} {...linkProps}>
    {children}
  </Link>
);

export default NavLink;
