import React ,{useState} from "react";
import Icon from "./components/Icon"
import "./tictactoe.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';

const TicTacToe = () => {
    const itemArray = new Array(9).fill("empty");
    const [isCross,setIsCross] = useState(false);
    const [winMessage,setWinMessage] = useState("");

    const reloadGame = () => {
        // 
    }
    const checkIsWinner = () => {
        //
    }
    const changeItem = (itemNumber) => {
        //
    }

    return (
        <div>
            <Container className="p-s">
                <ToastContainer position="bottom-center"/>
                <Row>
                    <Col md={6} className="offset-md-3">
                        <div className="grid">
                        {
                            itemArray.map(()=>(
                                <Card>
                                    <CardBody className="box">
                                        <Icon name={item}/>
                                    </CardBody>
                                </Card>
                            ))
                        }
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default TicTacToe;