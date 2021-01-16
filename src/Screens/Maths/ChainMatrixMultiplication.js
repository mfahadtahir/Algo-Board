import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import matrixChainOrder from "../../Algorithms/ChainMatrixMultiplication";

const ChainMatrixMultiplication = () => {
  const [chainOrder, setChainOrder] = useState(0);

  useEffect(() => {
    console.log(matrixChainOrder([1, 2, 3, 4], 4));
  }, []);

  const updateChainMultiplication = () => {
    // let data = document.getElementById("chain_matrix_multiplication").value.split(" ");
    // data = data.map((item) => parseInt(item));
    // if (isNaN(data[data.length - 1])) data.pop();
    // setChainOrder(matrixChainOrder(data, 1));
    // console.log(chainOrder);
  };
  const setSample = (sampleNum) => {
    console.log(sampleNum);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Matrix Chain Multiplication">
            The problem consists of finding the best way (order) of multiplying a set of matrices.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card title="Input" isOption setSample={setSample}>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Matrixs</Form.Label>
                    <Form.Control
                      id="chain_matrix_multiplication"
                      onChange={updateChainMultiplication}
                      as="textarea"
                      placeholder="1 2 3..."
                      rows="3"
                    />
                    <Form.Text className="text-muted">Kindly Input Numbers with space</Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Output">
            <p className="ml-3">{chainOrder}</p>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default ChainMatrixMultiplication;
