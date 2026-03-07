import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function ctype(): void {
        if (type === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }

    return (
        <div>
            <Button onClick={ctype}>Change Type</Button>
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
            {type === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
