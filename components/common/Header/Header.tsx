"use client";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import NavbarCollapse from "./NavbarCollapse";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar">
      <Container>
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="eshrak website"
            width={150}
            height={50}
            className="img-fluid"
          />
        </Link>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <NavbarCollapse setExpanded={setExpanded} />
        <Link href="/#support" className="contact-btn dis-none-inMobile">
          contact
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
