import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  exact?: boolean;
  activeClassName?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, exact = false, activeClassName, ...props }) => {
  const location = useLocation();
  const active = exact ? location.pathname === href : location.pathname.startsWith(href);
  const className = active ? `${props.className} ${activeClassName}`.trim() : props.className;

  return (
    <Link to={href} {...props} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
