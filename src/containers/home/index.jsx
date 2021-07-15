import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import { CustomButton } from "./components/index";
import history from "../../util/history";

const Home = () => {
  return (
    <>
      <Row align="center">
        <Col>
          <h2>Olá, o que deseja fazer?</h2>
        </Col>
      </Row>
      <Row>
        <Col className={"p-4"} sm={12} md={4}>
          <Card body inverse color="primary">
            <CardTitle className="text-center" tag="h5">
              Dashboard
            </CardTitle>
            <CardText className="text-center">
              Visualize as estatísticas relacionadas as denúncias.
            </CardText>
            <CustomButton
              onClick={() => history.push("/dashboard")}
              color="secondary"
            >
              Acessar
            </CustomButton>
          </Card>
        </Col>
        <Col className={"p-4"} sm={12} md={4}>
          <Card body inverse color="primary">
            <CardTitle className="text-center" tag="h5">
              Ver denúncias
            </CardTitle>
            <CardText className="text-center">
              Visualize todas as denúncias cadastradas pelos usuários.
            </CardText>
            <CustomButton
              onClick={() => history.push("/denuncias")}
              color="secondary"
            >
              Acessar
            </CustomButton>
          </Card>
        </Col>
        <Col className={"p-4"} sm={12} md={4}>
          <Card body inverse color="primary">
            <CardTitle className="text-center" tag="h5">
              Cadastrar novo usuário
            </CardTitle>
            <CardText className="text-center">
              Cadastre um novo usuário para liberar acesso ao sistema.
            </CardText>
            <CustomButton
              onClick={() => history.push("/usuarios")}
              color="secondary"
            >
              Acessar
            </CustomButton>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
