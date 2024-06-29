import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { NavLinkContainer } from './NavStyles';
import { IconContext, IconType } from 'react-icons';
import { FaHome } from 'react-icons/fa';

type NavLinkType = PropsWithChildren & {
  href: string;
  icon: typeof FaHome;
};

const NavLink: FC<NavLinkType> = ({ children, href, ...props }) => {
  return (
    <NavLinkContainer href={href}>
      <props.icon />

      <span> {children} </span>
    </NavLinkContainer>
  );
};

export default NavLink;
