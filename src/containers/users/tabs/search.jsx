import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Table,
} from "reactstrap";
import ReactPaginate from "react-paginate";
import "./styles/styles.css";

const Search = () => {
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

      <Row>
        <Col>
          <Table hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Usuário</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr className="text-center">
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr className="text-center">
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
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
            pageCount={10}
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
