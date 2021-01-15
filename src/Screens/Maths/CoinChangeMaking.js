import React, { useState } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import coinChangeMaking from "../../Algorithms/CoinChangeMaking";

const CoinChangeMaking = () => {
  const [coins, setCoins] = useState("");
  const [cents, setCents] = useState();
  const [coinChange, setCoinChange] = useState("---");
  const [init, setInit] = useState(false);

  const updateCoins = () => {
    let new_coins = document.getElementById("coins").value.split(" ");
    new_coins = new_coins.map((coin) => parseInt(coin));
    if (isNaN(new_coins[new_coins.length - 1])) new_coins.pop();
    setCoins(new_coins);
    setCoinChange(coinChangeMaking(new_coins, new_coins.length, cents));
    setInit(true);
  };
  const updateCents = () => {
    let new_cents = document.getElementById("cents").value;
    console.log(new_cents);
    if (!new_cents) return;
    setCents(new_cents);
    setCoinChange(coinChangeMaking(coins, coins.length, new_cents));
    setInit(true);
  };
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Coin Change Making" isOption>
            The Coin Change Problem is considered by many to be essential to understanding the
            paradigm of programming known as Dynamic Programming. The two often are always paired
            together because the coin change problem encompass the concepts of dynamic programming.
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
                    <Form.Group controlId="coins">
                      <Form.Label>Input Disctionary</Form.Label>
                      <Form.Control
                        defaultValue={coins}
                        onChange={updateCoins}
                        type="text"
                        placeholder="1 2 3 ..."
                      />
                      <Form.Text className="text-muted">Kindly Input Coins with Spaces</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="cents">
                      <Form.Label>Input String</Form.Label>
                      <Form.Control
                        defaultValue={cents}
                        onChange={updateCents}
                        type="number"
                        placeholder="3..."
                      />
                      <Form.Text className="text-muted">Kindly Input Cents</Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card title="Output">{init ? coinChange : "---"}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default CoinChangeMaking;
