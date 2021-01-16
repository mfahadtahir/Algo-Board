import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import levenshteinDistance from "../../Algorithms/LevenshteinDistance";
import { twoStringSample } from "../../Samples";

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
  const setSample = (sampleNum) => {
    console.log(sampleNum);
    setStr1(twoStringSample[sampleNum][0]);
    setStr2(twoStringSample[sampleNum][1]);
    setDist(levenshteinDistance(twoStringSample[sampleNum][0], twoStringSample[sampleNum][1]));
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Levenshtein Distance">
            The Levenshtein distance is a string metric for measuring difference between two
            sequences. Informally, the Levenshtein distance between two words is the minimum number
            of single-character edits (i.e. insertions, deletions or substitutions) required to
            change one word into the other.
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card title="Input" isOption setSample={setSample}>
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
            <Card title="Output">Levenshtein Distance: {dist}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default LevenshteinDistance;
