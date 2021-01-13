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

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import longestCommonSubsequence from "../../Algos/LongestCommonSubsequence";

const LongestCommonSubsequence = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [commonStr, setCommonStr] = useState("");

  const updateStr1 = () => {
    let firstSeq = document.getElementById("str1").value;
    setStr1(firstSeq);
    setCommonStr(longestCommonSubsequence(firstSeq.split(""), str2.split("")).join(""));
  };
  const updateStr2 = () => {
    let secondSeq = document.getElementById("str2").value;
    setStr2(secondSeq);
    setCommonStr(longestCommonSubsequence(str1.split(""), secondSeq.split("")).join(""));
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Longest Common Subsequence" isOption>
            <Row>
              <Col md={6}>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>First String</Form.Label>
                    <Form.Control
                      defaultValue={str1}
                      id="str1"
                      onChange={updateStr1}
                      as="textarea"
                      placeholder="My String..."
                      rows="3"
                    />
                    <Form.Text className="text-muted">Kindly Input First String</Form.Text>
                  </Form.Group>
                </Form>
              </Col>
              <Col md={6}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Second String</Form.Label>
                  <Form.Control
                    defaultValue={str2}
                    id="str2"
                    onChange={updateStr2}
                    as="textarea"
                    placeholder="My String..."
                    rows="3"
                  />
                  <Form.Text className="text-muted">Kindly Input Second String</Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <h5 className="mt-5 ml-3">Output</h5>
            </Row>
            <Row>
              <p className="ml-3">{commonStr.length < 1 ? "---" : commonStr}</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestCommonSubsequence;
