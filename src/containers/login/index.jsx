import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardImg,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useEffect } from "react";
import {
  CustomContainer,
  CustomButton,
  CustomInputComponent,
} from "./components";

import * as controller from "./controller";
import * as actions from "./store/actions";

import logo from "../../assets/imgs/logo-login.png";

const Login = () => {
  const { login, invalidLogin } = useSelector((state) => state.login);

  function handleKeyPress(event, type) {
    if (event.key === "Enter") {
      switch (type) {
        case "login":
          controller.LogIn(login);
          break;
        default:
          break;
      }
    }
  }

  function onChangeLogin(value, field) {
    value = value.toLowerCase();
    actions.cleanInvalidLogin(field);
    actions.login(field, value);
  }

  function logIn() {
    controller.LogIn(login);
  }

  function saveCredentials() {
    actions.login("saveCredentials", login.saveCredentials ? false : true);
  }

  useEffect(() => {
    if (localStorage.getItem("credentials")) {
      let credentials = JSON.parse(localStorage.getItem("credentials"));
      if (credentials.checked) {
        actions.login("email", credentials.email);
        actions.login("saveCredentials", credentials.checked);
      }
    }
  }, []);

  return (
    <>
      <CustomContainer>
        <Col>
          <Card
            style={{ width: "300px" }}
            className="card-lock align-center ml-auto mr-auto"
          >
            <CardBody>
              <Col>
                <Col
                  className="text-center"
                  style={{ margin: " 1rem auto 2rem auto", width: "128px" }}
                >
                  <CardImg top src={logo} className="mb-1 text-center" />
                </Col>
                <Row>
                  <Col>
                    <Label style={{ fontWeight: "700" }}>Email</Label>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="loginEmail"
                        placeholder="Digite seu email"
                        value={login.email}
                        onChange={(e) => onChangeLogin(e.target.value, "email")}
                        autoComplete="off"
                        className={invalidLogin.email ? "is-invalid" : ""}
                      />
                    </FormGroup>
                    <Label style={{ fontWeight: "700" }}>Senha</Label>
                    <FormGroup>
                      <Input
                        type="password"
                        name="password"
                        id="loginPassword"
                        value={login.password}
                        onChange={(e) =>
                          onChangeLogin(e.target.value, "password")
                        }
                        placeholder="Digite sua senha"
                        onKeyPress={(e) => handleKeyPress(e, "login")}
                        className={invalidLogin.password ? "is-invalid" : ""}
                      />
                    </FormGroup>
                    <Row>
                      <Col className="text-center">
                        <u style={{ color: "var(--color-laranja" }}>
                          <p className="default-color-login">
                            Esqueci minha senha
                          </p>
                        </u>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="text-center">
                    <CustomButton onClick={() => logIn()}>Login</CustomButton>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="text-center">
                    <CustomInputComponent
                      type="checkbox"
                      id="rememberCredentials"
                      label="Lembrar minhas credênciais"
                      checked={login.saveCredentials}
                      onChange={() => saveCredentials()}
                    />
                  </Col>
                </Row>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </CustomContainer>
    </>
  );
};

export default Login;
