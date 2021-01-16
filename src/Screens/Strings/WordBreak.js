import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import longestCommonSubsequence from "../../Algorithms/LongestCommonSubsequence";

const WordBreak = () => {
  const [dictionary, setDictionary] = useState("");
  const [myString, setMyString] = useState("");
  const [wordBreak, setWordBreak] = useState("---");
  const [init, setInit] = useState(false);

  const updateDictionary = () => {
    let dictionary = document.getElementById("dictionary").value;
    setDictionary(dictionary);
    setWordBreak(longestCommonSubsequence(dictionary.split(""), myString.split("")).join(""));
    setInit(true);
  };
  const updateMyString = () => {
    let myString = document.getElementById("myString").value;
    setMyString(myString);
    setWordBreak(longestCommonSubsequence(dictionary.split(""), myString.split("")).join(""));
    setInit(true);
  };
  const setSample = (sampleNum) => {
    console.log(sampleNum);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Word Break">
            Given an input string and a dictionary of words, find out if the input string can be
            segmented into a space-separated sequence of dictionary words.
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
                      <Form.Label>Input Disctionary</Form.Label>
                      <Form.Control
                        defaultValue={dictionary}
                        id="dictionary"
                        onChange={updateDictionary}
                        type="text"
                        placeholder="Cat Dog Apple Man Butter..."
                      />
                      <Form.Text className="text-muted">Kindly Input Words with Spaces</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Input String</Form.Label>
                      <Form.Control
                        defaultValue={myString}
                        id="myString"
                        onChange={updateMyString}
                        type="text"
                        placeholder="myapple..."
                      />
                      <Form.Text className="text-muted">
                        Kindly Input string without spaces
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card title="Output">{init ? (wordBreak ? "Possible" : "Not Possible") : "---"}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default WordBreak;
