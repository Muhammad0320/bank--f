import { navData } from './NavData';
import NavLink from './NavLink';
import NavLinks from './NavLinks';
import { StyledSidebar } from './NavStyles';

const Sidebar = () => {
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

      <NavLinks>
        <NavLink href="/settings"> Settings </NavLink>
        <NavLink href="/logout"> Logout </NavLink>
      </NavLinks>
    </StyledSidebar>
  );
};

export default Sidebar;

