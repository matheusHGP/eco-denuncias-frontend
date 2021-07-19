import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Form, Row, Button, TabContent, TabPane } from "reactstrap";
import Search from "./tabs/search";
import Register from "./tabs/register";
import * as actions from "./store/actions";

const Users = () => {
  const { tab } = useSelector((state) => state.users);

  function handleChangeTab(id) {
    actions.setActiveTab(id);
    actions.cleanInvalid();
    actions.cleanRegister();
  }

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Form>
              {tab === "Search" ? (
                <Row align="center" className="pt-2 pb-2">
                  <Col>
                    <Button
                      color="primary"
                      onClick={() => handleChangeTab("Register")}
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
                      onClick={() => handleChangeTab("Search")}
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
          <TabContent activeTab={tab}>
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
