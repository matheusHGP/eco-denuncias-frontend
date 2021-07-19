import React from "react";
import {
  Button,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Table,
} from "reactstrap";
import ReactPaginate from "react-paginate";
import "./styles/styles.css";
import { useSelector } from "react-redux";
import * as controller from "../controller";
import * as BiIcons from "react-icons/bi";

const Search = () => {
  const { items } = useSelector((state) => state.users);

  function handleSearch() {
    controller.get();
  }

  function handleUpdate() {
    console.log("teste");
  }

  return (
    <>
      <Modal className="text-center" isOpen={""} toggle={""} backdrop={false}>
        <ModalHeader toggle={""} style={{ height: "10px", border: "none" }} />
        <ModalBody>
          <p style={{ fontSize: "18px", color: "var(--color-preto)" }}>
            Tem certeza que deseja{" "}
            <strong style={{ fontSize: "17px" }}>remover</strong> esse item?
          </p>
        </ModalBody>
        <div className="m-3">
          <Button
            onClick={() => {}}
            color="danger"
            style={{ width: "100px", marginRight: "15px" }}
          >
            {" "}
            Cancelar{" "}
          </Button>
          <Button
            onClick={() => {}}
            style={{
              width: "100px",
              marginLeft: "15px",
              background: "var(--color-verde)",
              border: "none",
            }}
          >
            {" "}
            Confirmar{" "}
          </Button>
        </div>
      </Modal>
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
                <th>Usuário</th>
                <th>Email</th>
                <th>Chapa</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <>
                    <tr className="text-center">
                      <td key={index}>{item.name}</td>
                      <td key={index}>{item.email}</td>
                      <td key={index}>{item.chapa}</td>
                      <td key={index}>
                        <>
                          <BiIcons.BiEdit
                            style={{
                              fontSize: "1.2rem",
                              cursor: "pointer",
                              color: "#C4C7CA",
                              marginRight: "7px",
                            }}
                            onClick={() => handleUpdate(item.original.id)}
                          />
                        </>
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
    </>
  );
};

export default Search;
