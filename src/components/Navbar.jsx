import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

function Titulo() {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">TUTI-TIENDA</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav className="px-5">
                Categorías
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/almacen/">Almacén</DropdownItem>
                <DropdownItem href="/frescos/">Frescos</DropdownItem>
                <DropdownItem href="/congelados/">Congelados</DropdownItem>
                <DropdownItem href="/limpieza/">Limpieza</DropdownItem>
                <DropdownItem href="/perfumeria/">Perfumería</DropdownItem>
                <DropdownItem href="/hogar/">Hogar</DropdownItem>
                <DropdownItem href="/electrodomesticos/">
                  Electrodomésticos
                </DropdownItem>
                <DropdownItem href="/ferreteria/">Ferretería</DropdownItem>
                <DropdownItem href="/textiles/">Textiles</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="px-1">
              <NavLink href="/ofertas/">Ver ofertas</NavLink>
            </NavItem>
            <NavItem className="px-4">
              <NavLink href="/mas-vendido/">Lo más vendido</NavLink>
            </NavItem>
          </Nav>
          <div className="px-5">
            <Button color="primary">Ingresar</Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Titulo;
