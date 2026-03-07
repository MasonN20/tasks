import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibile, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setVisible(!visibile);
                }}
            >
                Reveal Answer
            </Button>{" "}
            {visibile && <div>42</div>}
        </div>
    );
}
