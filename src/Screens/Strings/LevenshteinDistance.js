import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import levenshteinDistance from "../../Algorithms/LevenshteinDistance";

const LevenshteinDistance = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [dist, setDist] = useState(0);

  const updateStr1 = () => {
    let firstSeq = document.getElementById("str1").value;
    setStr1(firstSeq);
    setDist(levenshteinDistance(firstSeq, str2));
  };
  const updateStr2 = () => {
    let secondSeq = document.getElementById("str2").value;
    setStr2(secondSeq);
    setDist(levenshteinDistance(str1, secondSeq));
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Levenshtein Distance">
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
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Output">
            <p className="ml-3">{dist}</p>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default LevenshteinDistance;
