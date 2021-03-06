import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Container,
} from "reactstrap";

import RoutesPath from "../../routes/routesPath";
import { CustomContainerComponent } from "./styles/styles";
import history from "../../util/history";
import "./styles/styles.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function logout() {
    history.push("/login");
    localStorage.removeItem("TOKEN_KEY");
    localStorage.removeItem("id");
  }

  return (
    <>
      <Navbar expand="md" className={"background-color-custom navbar-custom"}>
        <NavbarBrand
          style={{ color: "white", fontWeight: "bold" }}
          href="/home"
        >
          Painel de Controle
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                style={{ color: "white", fontWeight: "bold" }}
                href="/home"
              >
                Início
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white", fontWeight: "bold" }}
                href="/denuncias"
              >
                Denúncias
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white", fontWeight: "bold" }}
                href="/usuarios"
              >
                Usuários
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={() => logout()}
              >
                Sair
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

const CustomContainer = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CustomContainerComponent>
          <Navigation />
          <Container>
            <RoutesPath />
          </Container>
        </CustomContainerComponent>
      </div>
    </>
  );
};

export default CustomContainer;
