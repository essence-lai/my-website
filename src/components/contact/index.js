import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'
import Navbar from '../navBar/index';
import Transition from 'react-transition-group/Transition';


const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            header: false,
            bottomBar: false,
        };
        this.handleHeader = this.handleHeader.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.handleBottomBar = this.handleBottomBar.bind(this);
        this.renderBottomBar = this.renderBottomBar.bind(this);
    }

    handleHeader(){
        this.setState({header: true});
    }


    renderHeader(){
        setTimeout(this.handleHeader, 1);

    }
    handleBottomBar(){
        this.setState({bottomBar: true});
    }


    renderBottomBar(){
        setTimeout(this.handleBottomBar, 1);

    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render(){
        return (
            <Container className={"default"}>
                <Container className={'home'}>
                    <Navbar route={"contact"}/>
                    {this.renderHeader()}
                    <Transition in={this.state.header} timeout={0}>
                        {(state) => (
                            <h1 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="header">
                                Send me a message and I will get back to you within a day!
                            </h1>
                        )}
                    </Transition>
                    <Transition in={this.state.header} timeout={200}>
                        {(state) => (
                            <Form style={{...defaultStyle, ...transitionStyles[state]}}
                                  className={'form'}
                                  method={"POST"}
                                  action={"https://formspree.io/essencelai@gmail.com"}
                            >
                                <Form.Control
                                    type="text"
                                    label="Name"
                                    placeholder="Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                    className={"formControl"}
                                    required
                                />
                                <Form.Control
                                    type="email"
                                    label="Email Address"
                                    placeholder="Email Address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    className={"formControl"}
                                    required
                                />
                                <Form.Control
                                    as="textarea"
                                    rows={"15"}
                                    placeholder={"Message"}
                                    name={"message"}
                                    value={this.state.message}
                                    onChange={this.onChange}
                                    className={"formControl"}
                                    required
                                />
                                <Button variant="outline-danger" className="submit" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        )}
                    </Transition>
                </Container>
                <Container className={"contact-me"}>
                    {this.renderBottomBar()}
                    <Row className="find-me show-grid">
                        <Transition in={this.state.bottomBar} timeout={400}>
                            {(state) => (
                                <Col  style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                      className="column-small" xs={6} md={3}>
                                    <a className="button-icon" href="https://github.com/essence-lai"><i className="fab fa-github fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.bottomBar} timeout={600}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small" xs={6} md={3}>
                                    <a className="button-icon" href="https://www.linkedin.com/in/essence-lai-978b50a8/"><i className="fab fa-linkedin fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.bottomBar} timeout={800}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small" xs={6} md={3}>
                                    <a className="button-icon" href="https://www.facebook.com/herbal1"><i className="fab fa-facebook-square fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.bottomBar} timeout={1000}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small"  xs={6} md={3}>
                                    <a className="button-icon" href="https://www.instagram.com/elaimanning/"> <i className="fab fa-instagram fa-2x fa-icon-button"></i></a>
                                </Col>
                            )}
                        </Transition>
                    </Row>

                </Container>
            </Container>

        )
    }
}