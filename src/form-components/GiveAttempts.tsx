import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function gainAttempts() {
        const amount = parseInt(request);
        if (amount || amount === 0) {
            setAttempts(attempts + amount);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts left: {attempts}
            <Form.Group controlId="giveAttempt">
                <Form.Label>Attemps Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequest(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
