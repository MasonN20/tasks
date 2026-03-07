import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numA, changeA] = useState<number>(4);
    const [quizP, setP] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setP(true);
                    changeA(numA - 1);
                }}
                disabled={quizP || numA === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setP(false);
                }}
                disabled={!quizP}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    changeA(numA + 1);
                }}
                disabled={quizP}
            >
                Mulligan
            </Button>
            <div>{numA}</div>
        </div>
    );
}
