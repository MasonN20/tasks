import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c) => (
                <Form.Check
                    key={c}
                    type="radio"
                    name="color-choice"
                    value={c}
                    label={<span style={{ backgroundColor: c }}>{c}</span>}
                    id={`color-${c}`}
                    checked={color === c}
                    onChange={() => {
                        setColor(c);
                    }}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
