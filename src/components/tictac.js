import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Board from "./board";
import Square from "./square";
import calculateWinner from "./winner";

const initialState = ["", "", "", "", "", "", "", "", ""];

function Tictac() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXchanse, updateisXchanse] = useState(true);

  const onClickhandler = (i) => {
    let strings = [...gameState];
    strings[i] = isXchanse ? "X" : "0";
    updateGameState(strings);
    updateisXchanse(!isXchanse);
  };

  useEffect(() => {
    const winner = calculateWinner(gameState);
    if (winner) {
      alert(`winner is ${winner}!`);
      updateGameState(initialState);
      updateisXchanse(true);
    }
    const currentState = [...gameState];
    let flag = 0;
    for (let i = 0; i < 9; i += 1) {
      if (currentState[i] === "") {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      alert(`The game is Draw`);
      updateGameState(initialState);
      updateisXchanse(true);
    }
  }, [gameState]);

  return (
    <div>
      <Board>
        <Container style={{ width: "200px", height: "200px" }}>
          <Row>
            {gameState.map((square, i) => (
              <Col sm={4} key={i}>
                <Square
                  key={i}
                  value={square}
                  clicked={() => onClickhandler(i)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Board>
    </div>
  );
}

export default Tictac;
