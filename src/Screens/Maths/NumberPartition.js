import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import numberPartition from "../../Algorithms/NumberPartition";

const NumberPartition = () => {
  const [partitions, setPartitions] = useState(0);

  const updatePartitions = () => {
    setPartitions(numberPartition(parseInt(document.getElementById("partitionNumber").value)));
  };
  return (
    <Aux>
      <Row>
        <Col md={12}>
          <Card title="Longest Increasing Subsequence" isOption>
            {/* For Graph
            <Row>
              
            </Row> */}
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Partition Number</Form.Label>
                    <Form.Control
                      defaultValue={0}
                      id="partitionNumber"
                      onChange={updatePartitions}
                      type="number"
                      placeholder="10..."
                    />
                    <Form.Text className="text-muted">Kindly Input The Partition Space</Form.Text>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <h5 className="mt-5 ml-3">Output</h5>
            </Row>
            <Row>
              <p className="ml-3">{partitions}</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default NumberPartition;
