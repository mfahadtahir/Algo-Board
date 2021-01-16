import React, { useState, useEffect } from "react";
import { Row, Col, Form, CardDeck } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import knapsack from "../../Algorithms/Knapsack";

const Knapsack = () => {
  const [profits, setProfits] = useState("");
  const [weights, setWeights] = useState("");
  const [bucketSize, setBucketSize] = useState();
  const [items, setItems] = useState("---");
  const [init, setInit] = useState(false);

  const updateProfits = () => {
    if (!weights || !bucketSize) return;
    let new_profits = document.getElementById("profits").value.split(" ");
    new_profits = new_profits.map((profit) => parseInt(profit));
    if (isNaN(new_profits[new_profits.length - 1])) {
      new_profits.pop();
    }
    setProfits(new_profits);
    setItems(knapsack(2, [1, 1, 1], new_profits, 3));
    setInit(true);
  };
  const updateWeights = () => {
    if (!profits || !bucketSize) return;
    let new_weights = document.getElementById("weights").value.split(" ");
    new_weights = new_weights.map((weight) => parseInt(weight));
    if (isNaN(new_weights[new_weights.length - 1])) {
      new_weights.pop();
    }
    setWeights(new_weights);
    setItems(knapsack(2, new_weights, [10, 20, 30], 3));
    setInit(true);
  };

  const updateBucketSize = () => {
    if (!profits || !weights) return;

    let new_bucketSize = parseInt(document.getElementById("bucketSize").value);
    console.log(new_bucketSize);
    if (!new_bucketSize) return;
    setBucketSize(new_bucketSize);
    setItems(knapsack(new_bucketSize, weights, profits, 3));
    setInit(true);
  };
  const setSample = (sampleNum) => {
    console.log(sampleNum);
  };
  useEffect(() => {
    console.log(knapsack(2, [1, 1, 1], [10, 20, 30], 3));
  }, []);
  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Knapsack">
            Given weights and values of n items, put these items in a knapsack of capacity W to get
            the maximum total value in the knapsack.
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
                    <Form.Group controlId="profits">
                      <Form.Label>Profits</Form.Label>
                      <Form.Control
                        defaultValue={profits}
                        onChange={updateProfits}
                        type="text"
                        placeholder="1 2 3 ..."
                      />
                      <Form.Text className="text-muted">Kindly Input Profits with Spaces</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="weights">
                      <Form.Label>Weights</Form.Label>
                      <Form.Control
                        defaultValue={weights}
                        onChange={updateWeights}
                        type="text"
                        placeholder="1 2 3 ..."
                      />
                      <Form.Text className="text-muted">Kindly Input Wdights with Spaces</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="bucketSize">
                      <Form.Label>Bucket Size</Form.Label>
                      <Form.Control
                        defaultValue={bucketSize}
                        onChange={updateBucketSize}
                        type="number"
                        placeholder="10 ..."
                      />
                      <Form.Text className="text-muted">Kindly Input bucket size</Form.Text>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Card>
            <Card title="Output">{init ? items : "---"}</Card>
          </CardDeck>
        </Col>
      </Row>
    </Aux>
  );
};

export default Knapsack;
