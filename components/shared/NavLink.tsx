
import { NavLinkProps } from "@/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ href = "", className = "", children }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  const activeClass = isActive ? " font-semibold text-base leading-[100%]" : "";
  return (
    <Link href={href} className={className + activeClass + "  hover:text-white"}>
      {children}
    </Link>
  );
};

export default NavLink;
