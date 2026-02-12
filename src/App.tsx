import React from "react";
import "./App.css";
import dwayne from "./Images/DwayneStare.gif";
import { Button, Col, Row, Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "darkblue" }}
            >
                <h1>Hello World</h1>
                UD CISC275 with React Hooks and TypeScript
                <p>Edited by Mason Nichols</p>
            </header>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div>
                How to tell if you good at coding!
                <ul>
                    <li>You can make the code</li>
                    <li>You can understand the code</li>
                    <li>you can run the code</li>
                </ul>
            </div>
            <img src={dwayne} alt="Dwayne The Rock Staring" />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
