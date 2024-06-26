import { FC, ReactNode } from 'react';
import { StyledSidebar } from './NavStyles';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import { navData } from './NavData';

const Sidebar: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledSidebar>
      <NavLinks>
        {navData.map(item => (
          <NavLink key={item.content} href={item.href}>
            {' '}
            {item.content}{' '}
          </NavLink>
        ))}
      </NavLinks>
    </StyledSidebar>
  );
};

export default Sidebar;
