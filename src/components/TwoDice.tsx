import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [value1, changevalue1] = useState<number>(1);
    const [value2, changevalue2] = useState<number>(2);
    return (
        <div>
            <span data-testid="left-die">{value1}</span>
            <span data-testid="right-die">{value2}</span>
            <div>
                <Button
                    onClick={() => {
                        changevalue1(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        changevalue2(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {value1 === 1 && value2 === 1 && <div>Lose</div>}
            {value1 !== 1 && value2 !== 1 && value1 === value2 && (
                <div>Win</div>
            )}
        </div>
    );
}
