import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import NVD3Chart from "react-nvd3";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import longestIncreasingSubsequence from "../../Algorithms/LongestIncreasingSubsequence";

const LongestIncreasingSubsequence = () => {
  const [seq, setSeq] = useState([]);
  const [longest, setLongest] = useState(0);
  const [graphData, setGraphData] = useState([
    {
      key: "Cumulative Return",
      values: [],
    },
  ]);

  const updateLIS = () => {
    let graph = {
        key: "Cumulative Return",
        values: [],
      },
      data = document.getElementById("longest_increasing_sequence").value.split(" ");
    data = data.map((item) => parseInt(item));
    if (isNaN(data[data.length - 1])) data.pop();
    setLongest(longestIncreasingSubsequence(data));
    data.forEach((value, key) => {
      graph.values.push({ key, value });
    });
    setGraphData([graph]);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Longest Increasing Subsequence">
            The problem consists of finding the best way (order) of multiplying a set of matrices.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card title="Input">
            <Row>
              <NVD3Chart
                tooltip={{ enabled: true }}
                type="discreteBarChart"
                datum={graphData}
                x="key"
                y="value"
                width={700}
                height={300}
                showValues
              />
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Number Series</Form.Label>
                    <Form.Control
                      defaultValue={seq}
                      id="longest_increasing_sequence"
                      onChange={updateLIS}
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
            <p className="ml-3">{longest}</p>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestIncreasingSubsequence;
