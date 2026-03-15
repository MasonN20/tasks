import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="Edit-Mode"
                label="Edit"
                checked={edit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEdit(event.target.checked);
                }}
            />
            {edit ?
                <div>
                    <Form.Group controlId="editName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="student-check"
                        label="Student"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
