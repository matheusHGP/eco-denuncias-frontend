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

const Reports = () => {
  return (
    <>
      <Card className="p-3">
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Munícpe</th>
                  <th>CPF</th>
                  <th>Email</th>
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
      </Card>
    </>
  );
};

export default Reports;
