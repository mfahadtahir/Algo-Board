import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import balancedPartition from "../../Algorithms/BalancedPartition";
import { BalancedPartitionSample } from "../../Samples";

const LongestIncreasingSubsequence = () => {
  const [seq, setSeq] = useState("");
  const [partitions, setPartitions] = useState(false);
  const [init, setInit] = useState(false);

  const updatePartitions = () => {
    let data = document.getElementById("balancePartition").value.split(" ");
    data = data.map((item) => parseInt(item));

    if (isNaN(data[data.length - 1])) data.pop();

    let result = balancedPartition(data);
    console.log(result);
    setPartitions(result);
    setInit(true);
  };
  const setSample = (sampleNum) => {
    console.log(sampleNum);
    setSeq(BalancedPartitionSample[sampleNum].join(" "));
    updatePartitions();
    // setPartitions(balancedPartition(BalancedPartitionSample[sampleNum]));
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
          <CardDeck>
            <Card title="Input" isOption setSample={setSample}>
              <Form>
                <Form.Group>
                  <Form.Label>Partition Number</Form.Label>
                  <Form.Control
                    defaultValue={seq}
                    id="balancePartition"
                    onChange={updatePartitions}
                    type="text"
                    placeholder="10..."
                  />
                  <Form.Text className="text-muted">Kindly Input The Partition Space</Form.Text>
                </Form.Group>
              </Form>
            </Card>
            <Card title="Output">{init ? (partitions ? "Possible" : "Not Possible") : "---"}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestIncreasingSubsequence;
