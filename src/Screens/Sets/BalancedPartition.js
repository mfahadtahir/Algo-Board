import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import balancedPartition from "../../Algorithms/BalancedPartition";

const LongestIncreasingSubsequence = () => {
  const [partitions, setPartitions] = useState(false);
  const [init, setInit] = useState(false);
  const updatePartitions = () => {
    let data = document.getElementById("balancePartition").value.split(" ");
    data = data.map((item) => parseInt(item));
    let result = balancedPartition(data);
    console.log(result);
    setPartitions(result);
    setInit(true);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Balanced Partition">
            Given a set of integers, partition those integers into two parts where the difference
            between the two parts is minimum. This problem is known as balanced partition problem.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card title="Input">
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Number Series</Form.Label>
                    <Form.Control
                      id="balancePartition"
                      onChange={updatePartitions}
                      as="textarea"
                      placeholder="1 2 3..."
                      rows="3"
                    />
                    <Form.Text className="text-muted">Kindly Input Numbers with space</Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              {/* <Button onClick={updateLIS}>Submit</Button> */}
            </Row>
            {/* <Row>
              <h5 className="mt-5 ml-3">Output</h5>
            </Row> */}
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Output">
            {/* <p className="ml-3"> */}
            {init ? (partitions ? "Possible" : "Not Possible") : "---"}
            {/* </p> */}
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestIncreasingSubsequence;
