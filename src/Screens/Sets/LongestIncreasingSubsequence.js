import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import NVD3Chart from "react-nvd3";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import longestIncreasingSubsequence from "../../Algorithms/LongestIncreasingSubsequence";
import { longestIncreasingSequenceSample } from "../../Samples";

const LongestIncreasingSubsequence = () => {
  const [seq, setSeq] = useState([]);
  const [longest, setLongest] = useState(0);
  const [graphData, setGraphData] = useState([
    {
      key: "",
      values: [],
    },
  ]);

  const updateLIS = () => {
    let graph = {
        key: "Number",
        values: [],
      },
      data = document.getElementById("longest_increasing_sequence").value;
    setSeq(data);

    data = data.split(" ").map((item) => parseInt(item));
    if (isNaN(data[data.length - 1])) data.pop();
    setLongest(longestIncreasingSubsequence(data));
    data.forEach((value, key) => {
      graph.values.push({ x: key, y: value });
    });
    setGraphData([graph]);
  };
  const setSample = (sampleNum) => {
    let graph = {
      key: "Number",
      values: [],
    };
    console.log(sampleNum);
    setSeq(longestIncreasingSequenceSample[sampleNum].join(" "));
    setLongest(longestIncreasingSubsequence(longestIncreasingSequenceSample[sampleNum]));
    longestIncreasingSequenceSample[sampleNum].forEach((y, x) => {
      graph.values.push({ x, y });
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
          <Card title="Input" isOption setSample={setSample}>
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
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Output">
            Longest Increasing Subsequence: {longest}
            <NVD3Chart
              tooltip={{ enabled: true }}
              type="multiBarChart"
              datum={graphData}
              x="x"
              y="y"
              height={300}
              showValues
              showControls={false}
            />
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestIncreasingSubsequence;
