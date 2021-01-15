import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";
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
            The Longest Increasing Subsequence (LIS) problem is to find the length of the longest
            subsequence of a given sequence such that all elements of the subsequence are sorted in
            increasing order.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CardDeck>
            <Card title="Input">
              <Row>
                <Col>
                  <Form>
                    <Form.Group>
                      <Form.Label>Number Series</Form.Label>
                      <Form.Control
                        defaultValue={seq}
                        id="longest_increasing_sequence"
                        onChange={updateLIS}
                        type="text"
                        placeholder="1 2 3 ..."
                      />
                      <Form.Text className="text-muted">Kindly Input Numbers with space</Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card width="70%" title="Output">
              Longest Increasing Subsequence: {longest}
              <NVD3Chart
                tooltip={{ enabled: true }}
                type="discreteBarChart"
                datum={graphData}
                x="key"
                y="value"
                height={300}
                width={400}
                showValues
              />
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestIncreasingSubsequence;
