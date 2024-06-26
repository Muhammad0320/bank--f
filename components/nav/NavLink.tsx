import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

type NavLinkType = PropsWithChildren & {
  href: string;
};

const NavLink: FC<NavLinkType> = ({ children, href }) => {
  return <Link href={href}> {children} </Link>;
};

export default NavLink;
