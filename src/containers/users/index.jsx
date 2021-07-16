import React, { useState } from "react";
import { Card, Col, Form, Row, Button, TabContent, TabPane } from "reactstrap";
import Search from "./tabs/search";
import Register from "./tabs/register";

const Users = () => {
  const [active, setActive] = useState("Search");

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Form>
              {active === "Search" ? (
                <Row align="center" className="pt-2 pb-2">
                  <Col>
                    <Button
                      color="primary"
                      onClick={() => setActive("Register")}
                      style={{ width: "200px" }}
                    >
                      Cadastrar Usuário
                    </Button>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col align="center" className="pt-2 pb-2">
                    <Button
                      color="primary"
                      onClick={() => setActive("Search")}
                      style={{ width: "200px" }}
                    >
                      Voltar
                    </Button>
                  </Col>
                </Row>
              )}
            </Form>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <TabContent activeTab={active}>
            <TabPane tabId="Search">
              <br />
              <Card className="p-3">
                <Search />
              </Card>
            </TabPane>
            <TabPane tabId="Register">
              <br />
              <Card className="p-3">
                <Register />
              </Card>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </>
  );
};

export default Users;
