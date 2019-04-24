import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';
import Transition from 'react-transition-group/Transition';
export default class Contact extends React.Component{

    render(){
        return (
            <Container className={"default"}>
                <Container className={'home'}>
                    <Navbar route={"contact"}/>
                </Container>
            </Container>
        )
    }
}