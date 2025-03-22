import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

type TCollapseProps = {
  setExpanded: (value: boolean) => void;
};
const NavbarCollapse = ({ setExpanded }: TCollapseProps) => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto links">
        {navLinks.map((link, index) => (
          <Nav.Link
            key={index}
            as={Link}
            href={link.href}
            onClick={() => setExpanded(false)}
          >
            {link.name}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  );
};

export default NavbarCollapse;
