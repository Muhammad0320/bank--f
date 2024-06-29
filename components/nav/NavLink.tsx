import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { NavLinkContainer } from './NavStyles';
import { IconContext, IconType } from 'react-icons';

type NavLinkType = PropsWithChildren & {
  href: string;
  icon: IconType;
};

const NavLink: FC<NavLinkType> = ({ children, href, ...props }) => {
  return (
    <NavLinkContainer href={href}>
      <IconContext.Provider value={{ size: '1.2rem' }}>
        <props.icon />
      </IconContext.Provider>
      <span> {children} </span>
    </NavLinkContainer>
  );
};

export default NavLink;
