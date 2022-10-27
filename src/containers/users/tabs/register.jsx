import React from "react";
import { useSelector } from "react-redux";
import { Col, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import * as actions from "../store/actions";
import * as controller from "../controller/index";

const Register = () => {
  const { item, invalid, copy } = useSelector((state) => state.users);

  function handleUser(id, event) {
    actions.cleanInvalid(id);
    actions.setItem({ ...item, [id]: event });
  }

  function handleSubmit() {
    if (!item.id) {
      controller.create(item);
    } else {
      controller.update(item, copy);
    }
  }

  return (
    <>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Row className="p-2">
                <Col sm={12} md={6}>
                  <Label>Nome</Label>
                  <Input
                    type={"text"}
                    placeholder={"Digite aqui..."}
                    value={item.name}
                    onChange={(e) => handleUser("name", e.target.value)}
                    className={invalid.name ? "is-invalid" : ""}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Label>Email</Label>
                  <Input
                    type={"text"}
                    placeholder={"Digite aqui..."}
                    value={item.email}
                    onChange={(e) => handleUser("email", e.target.value)}
                    className={invalid.email ? "is-invalid" : ""}
                  />
                </Col>
              </Row>
              <Row className="p-2">
                <Col sm={12} md={6}>
                  <Label>Chapa</Label>
                  <Input
                    type={"text"}
                    placeholder={"Digite aqui..."}
                    value={item.chapa}
                    onChange={(e) => handleUser("chapa", e.target.value)}
                    className={invalid.chapa ? "is-invalid" : ""}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Label>Senha</Label>
                  <Input
                    type={"password"}
                    placeholder={"Digite aqui..."}
                    value={item.password}
                    onChange={(e) => handleUser("password", e.target.value)}
                    className={invalid.password ? "is-invalid" : ""}
                  />
                </Col>
              </Row>
              <Row className="p-2 float-right">
                <Col sm={6} md={3}>
                  <Button color="primary" onClick={() => handleSubmit()}>
                    Enviar
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
