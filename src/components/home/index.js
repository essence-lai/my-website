import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';

export default class Home extends React.Component{

    render(){
        return(
            <Container className={"default"}>
                <Container className={"home"}>
                    <Navbar route={"home"}/>
                </Container>
            </Container>
        )
    }

}