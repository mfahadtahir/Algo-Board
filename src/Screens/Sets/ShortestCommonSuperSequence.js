import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import ShortestCommonSuperSequence from "../../Algorithms/ShortestCommonSuperSequence";

const LongestCommonSubsequence = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [commonStr, setCommonStr] = useState("");

  const updateStr1 = () => {
    let firstSeq = document.getElementById("str1").value;
    setStr1(firstSeq);
    setCommonStr(ShortestCommonSuperSequence(firstSeq.split(""), str2.split("")).join(""));
  };
  const updateStr2 = () => {
    let secondSeq = document.getElementById("str2").value;
    setStr2(secondSeq);
    setCommonStr(ShortestCommonSuperSequence(str1.split(""), secondSeq.split("")).join(""));
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Shortest Common Supersequence">
            In Shortest Common Supersequence are given two strings str1 and str2, the task is to
            find the length of the shortest string that has both str1 and str2 as subsequences.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card title="Input">
              <Row>
                <Col md={12}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>First String</Form.Label>
                      <Form.Control
                        defaultValue={str1}
                        id="str1"
                        onChange={updateStr1}
                        type="text"
                        placeholder="My String..."
                      />
                      <Form.Text className="text-muted">Kindly Input First String</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Second String</Form.Label>
                      <Form.Control
                        defaultValue={str2}
                        id="str2"
                        onChange={updateStr2}
                        type="text"
                        placeholder="My String..."
                      />
                      <Form.Text className="text-muted">Kindly Input Second String</Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card title="Output">
              <p className="ml-3">{commonStr.length < 1 ? "---" : commonStr}</p>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default LongestCommonSubsequence;
