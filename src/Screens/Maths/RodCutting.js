import React, { useState, useEffect } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import rodCutting from "../../Algorithms/RodCutting";

const RodCutting = () => {
  const [prices, setPrices] = useState("");
  const [rodCut, setRodCut] = useState("---");
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log(rodCutting([1, 5, 8, 9, 10, 17, 17, 20], 8));
  }, []);

  const updatePrices = () => {
    let new_prices = document.getElementById("prices").value;
    setPrices(new_prices);

    new_prices = new_prices.split(" ").map((price) => parseInt(price));
    // console.log("after converting", new_prices);
    if (isNaN(new_prices[new_prices.length - 1])) {
      new_prices.pop();
    }
    console.log("calculating", new_prices);
    setRodCut(rodCutting(new_prices, new_prices.length));
    setInit(true);
  };
  const setSample = (sampleNum) => {
    console.log(sampleNum);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Rod Cutting">
            Given a rod of length n inches and an array of prices that contains prices of all pieces
            of size smaller than n. Determine the maximum value obtainable by cutting up the rod and
            selling the pieces.
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
                    <Form.Group controlId="prices">
                      <Form.Label>Input Prices</Form.Label>
                      <Form.Control
                        defaultValue={prices}
                        onChange={updatePrices}
                        type="text"
                        placeholder="1 2 3 ..."
                      />
                      <Form.Text className="text-muted">Kindly Input Prices with Spaces</Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card title="Output">{init ? rodCut : "No Input"}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default RodCutting;
