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
import { useSelector } from "react-redux";
import * as controller from "./controller/index";

const Reports = () => {
  const { items } = useSelector((state) => state.occurrences);

  function handleSearch() {
    controller.get();
  }

  return (
    <>
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
                  <th>Usuário</th>
                  <th>Email</th>
                  <th>Chapa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  {items.map((item, index) => {
                    return (
                      <>
                        <td key={index}>{item.name}</td>
                        <td key={index}>{item.email}</td>
                        <td key={index}>{item.chapa}</td>
                      </>
                    );
                  })}
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
      </Card>
    </>
  );
};

export default Reports;
