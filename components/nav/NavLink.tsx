import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { NavLinkContainer } from './NavStyles';

type NavLinkType = PropsWithChildren & {
  href: string;
  icon: ReactNode;
};

const NavLink: FC<NavLinkType> = ({ children, href, icon }) => {
  return (
    <NavLinkContainer>
      {icon}
      <Link href={href}> {children} </Link>
    </NavLinkContainer>
  );
};

export default NavLink;
