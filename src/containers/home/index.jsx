import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import { CustomButton } from "./components/index";
import history from "../../util/history";

const Home = () => {
  return (
    <>
      <Card className="p-3">
        <Row align="center">
          <Col>
            <h2>Olá, o que deseja fazer?</h2>
          </Col>
        </Row>
        <Row>
          <Col className={"p-4"} sm={12} md={6}>
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
          <Col className={"p-4"} sm={12} md={6}>
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

        <Row align="center">
          <Col className={"p-4"} sm={12} md={4}>
            <Card body className="text-center">
              <CardTitle tag="h5">Denúncias realizadas</CardTitle>
              <CardText>Quantidade: 100</CardText>
            </Card>
          </Col>
          <Col className={"p-4"} sm={12} md={4}>
            <Card body className="text-center">
              <CardTitle tag="h5">Denuncias em atendimento</CardTitle>
              <CardText>Quantidade: 20</CardText>
            </Card>
          </Col>
          <Col className={"p-4"} sm={12} md={4}>
            <Card body className="text-center">
              <CardTitle tag="h5">Denúncias finalizadas</CardTitle>
              <CardText>Quantidade: 40</CardText>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Home;
