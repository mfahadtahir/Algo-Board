import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import numberPartition from "../../Algorithms/NumberPartition";

const IntegerPartition = () => {
  const [partitions, setPartitions] = useState(0);

  const updatePartitions = () => {
    setPartitions(numberPartition(parseInt(document.getElementById("partitionNumber").value)));
  };
  const setSample = (sampleNum) => {
    console.log(sampleNum);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Integer Partition">
            In number theory and combinatorics, a partition of a positive integer n, also called an
            integer partition, is a way of writing n as a sum of positive integers. Two sums that
            differ only in the order of their summands are considered the same partition.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CardDeck>
            <Card title="Input" isOption setSample={setSample}>
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
            </Card>
            <Card title="Output">{partitions}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default IntegerPartition;
