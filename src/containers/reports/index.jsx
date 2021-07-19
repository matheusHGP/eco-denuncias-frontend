import React, { useState } from "react";
import {
  Card,
  Col,
  Input,
  Row,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import ReactPaginate from "react-paginate";
import "./styles/styles.css";
import * as controller from "./controller/index";
import { data } from "./controller/mock";
import * as BiIcons from "react-icons/bi";

const Reports = () => {
  const [modal, setModal] = useState(false);
  const [item, setInfo] = useState({
    number: "",
    citizen: "",
    type: "",
    date: "",
    dateEnd: "",
    neighborhood: "",
    images: [],
  });

  const toggle = () => setModal(!modal);

  function handleSearch() {
    controller.get();
  }

  function open(info) {
    setInfo(info);
  }

  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Informações</ModalHeader>
          <ModalBody>
            <Row>
              <Col>
                <Form>
                  <FormGroup>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Número da Ocorrência</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={item.number}
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Cidadão Denunciador</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={item.citizen}
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Data da Ocorrência</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={item.date}
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Data da Denúncia</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={item.dateEnd}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Bairro</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={item.neighborhood}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Tipo</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={item.type}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Status</Label>
                        <Input type={"select"}>
                          <option>Registro do número de ocorrência</option>
                          <option>Registro do auto de infração-AI</option>
                          <option>
                            Encaminhamento do AI a 2ª Promotoria de Justiça
                          </option>
                          <option>
                            Encaminhamento do AI a 7ª Promotoria de Justiça
                          </option>
                          <option>Encaminhamento do AI a Polícia Cívil</option>
                          <option>
                            Encaminhamento do AI a Polícia Mílitar Ambiental
                          </option>
                          <option>Encaminhamento do AI a CETESB</option>
                          <option>Encaminhamento do AI a CETESB</option>
                          <option>Solitação de novas informações</option>
                          <option>Não procede</option>
                        </Input>
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col sm={12} md={12}>
                        <Label>Obervações</Label>
                        <Input
                          type={"text"}
                          placeholder={"Digite aqui..."}
                          value={""}
                        />
                      </Col>
                    </Row>
                    <Row className="p-2">
                      <Col>
                        <p> Fotos: </p>
                      </Col>
                    </Row>
                    <ul>
                      {item.images.map((item, index) => {
                        return (
                          <Row className="p-2">
                            <Col sm={12} md={12}>
                              <li>
                                <a href="/" key={index}>
                                  {item}
                                </a>
                              </li>
                            </Col>
                          </Row>
                        );
                      })}
                    </ul>
                    <Row className="text-center">
                      <Col sm={12} md={12}>
                        <Button color="primary" onClick={() => toggle()}>
                          Enviar
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>

      <Card className="p-3">
        <Row className="p-2 float-right">
          <Col sm={6} md={3}>
            <Button color="primary" onClick={() => handleSearch()}>
              Pesquisar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr className="text-center">
                  <th>Número da ocorrência</th>
                  <th>Cidadão denunciador</th>
                  <th>Tipo</th>
                  <th>Data de ocorrência</th>
                  <th>Data da denúcia</th>
                  <th>Bairro</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <>
                      <tr className="text-center">
                        <td key={index}>{item.number}</td>
                        <td key={index}>{item.citizen}</td>
                        <td key={index}>{item.type}</td>
                        <td key={index}>{item.date}</td>
                        <td key={index}>{item.dateEnd}</td>
                        <td key={index}>{item.neighborhood}</td>
                        <td key={index}>{item.status}</td>
                        <td>
                          <BiIcons.BiEdit
                            style={{
                              fontSize: "1.2rem",
                              cursor: "pointer",
                              color: "#C4C7CA",
                              marginRight: "7px",
                            }}
                            onClick={() => {
                              open(item);
                              toggle();
                            }}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row align="right" className="pt-4">
          <Col>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              initialPage={0}
              pageCount={1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={1}
              onPageChange={""}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              forcePage={""}
            />
          </Col>
          <Col>
            <Input
              type="select"
              className="pageSize"
              value={10}
              onChange={(e) => {}}
            >
              {[10, 25, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize} itens
                </option>
              ))}
            </Input>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Reports;
