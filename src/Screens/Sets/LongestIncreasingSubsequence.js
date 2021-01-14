import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
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
    setLongest(longestIncreasingSubsequence(data));
    data.forEach((value, key) => {
      graph.values.push({ key, value });
    });
    setGraphData([graph]);
  };
  return (
    <Aux>
      <Row>
        <Col md={12}>
          <Card title="Longest Increasing Subsequence" isOption>
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
                      // onChange={updateLIS}
                      as="textarea"
                      placeholder="1 2 3..."
                      rows="3"
                    />
                    <Form.Text className="text-muted">Kindly Input Numbers with space</Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              <Button onClick={updateLIS}>Submit</Button>
            </Row>
            <Row>
              <h5 className="mt-5 ml-3">Output</h5>
            </Row>
            <Row>
              <p className="ml-3">{longest}</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestIncreasingSubsequence;
