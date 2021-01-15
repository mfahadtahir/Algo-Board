import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import rodCutting from "../../Algorithms/RodCutting";

const RodCutting = () => {
  const [prices, setPrices] = useState("");
  const [rodLength, setRodLength] = useState();
  const [rodCut, setRodCut] = useState("---");
  const [init, setInit] = useState(false);

  const updatePrices = () => {
    let new_prices = document.getElementById("prices").value.split(" ");
    setPrices(new_prices);

    new_prices = new_prices.map((price) => parseInt(price));
    // console.log("after converting", new_prices);
    if (isNaN(new_prices[new_prices.length - 1])) {
      new_prices.pop();
      if (new_prices.length > prices) return;
    }
    console.log("calculating", new_prices);
    setRodCut(rodCutting(new_prices, rodLength));
    setInit(true);
  };
  const updateRodLength = () => {
    let new_rodLength = parseInt(document.getElementById("rodLength").value);
    if (!new_rodLength) {
      setInit(false);
      return;
    }

    let new_prices = prices.map((item) => parseInt(item));

    if (isNaN(new_prices[new_prices.length - 1])) {
      new_prices.pop();
    }

    setRodLength(new_rodLength);
    setRodCut(rodCutting(new_prices, new_rodLength));
    setInit(true);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Rod Cutting" isOption>
            Given a rod of length n inches and an array of prices that contains prices of all pieces
            of size smaller than n. Determine the maximum value obtainable by cutting up the rod and
            selling the pieces.
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
                    <Form.Group controlId="rodLength">
                      <Form.Label>Input Rod's Length</Form.Label>
                      <Form.Control
                        defaultValue={rodLength}
                        onChange={updateRodLength}
                        type="number"
                        placeholder="3..."
                      />
                      <Form.Text className="text-muted">Kindly Input Rod's Length</Form.Text>
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
