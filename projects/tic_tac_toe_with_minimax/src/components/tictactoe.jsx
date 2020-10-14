import React, { useState } from 'react';
import styled from "styled-components";
import { getRandomInt } from "./utils"
import { DIMS, PLAYER_X, PLAYER_O, SQUARE_DIMS } from './constants'

const arr = new Array(DIMS ** 2).fill(null)

function TictacToe() {
    const [grid, setGrid] = useState(arr)
    const [players, setPlayers] = useState({ human: PLAYER_X, computer: PLAYER_O })


    // updates the state of the table in memory
    const move = (index, player) => {

        setGrid(grid => {
            const gridCopy = grid.concat()
            gridCopy[index] = player;

            return gridCopy;
        }
        )
    }

    const computerMove = () => {
        let index = getRandomInt(0, 8);
        while (grid[index]) {
            index = getRandomInt(0, 8);
        }
        move(index, players.computer);
    };

    const humanMove = index => {
        if (!grid[index]) {
            move(index, players.human);
            computerMove();
        }
    };


    return (
        <Container dims={DIMS}>
            {grid.map((value, index) => {
                const isActive = value !== null;

                return (
                    <Square key={index} onClick={() => humanMove(index)}>
                        {isActive && <Marker>{value === PLAYER_X ? "X" : "O"}</Marker>}
                    </Square>
                )
            })}
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: ${({ dims }) => `${dims * (SQUARE_DIMS + 5)}px`};
    flex-flow: wrap;
    position: relative;
`;

const Square = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${SQUARE_DIMS}px;
    height: ${SQUARE_DIMS}px;
    border: 1px solid black;

    &:hover {
    cursor: pointer;
    }
`;

const Marker = styled.p`
    font-size: 68px;
`;

export default TictacToe;