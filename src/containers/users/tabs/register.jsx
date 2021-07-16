import React from "react";
import { Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Register = () => {
  return (
    <>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Row className="p-2">
                <Col sm={12} md={6}>
                  <Label>Nome</Label>
                  <Input />
                </Col>
                <Col sm={12} md={6}>
                  <Label>Email</Label>
                  <Input />
                </Col>
              </Row>
              <Row className="p-2">
                <Col sm={12} md={6}>
                  <Label>Chapa</Label>
                  <Input />
                </Col>
                <Col sm={12} md={6}>
                  <Label>Senha</Label>
                  <Input />
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
