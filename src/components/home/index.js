import React from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './styles.css'
import Navbar from '../navBar/index';
import Transition from 'react-transition-group/Transition';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faCocktail, faCode, faFile} from '@fortawesome/free-solid-svg-icons'

library.add(faGlobeAmericas, faCocktail,faCode,faFile);

const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

export default class Home extends React.Component{
    constructor(){
        super();
        this.renderName = this.renderName.bind(this);
        this.renderAboutMe = this.renderAboutMe.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.state = {
            name: false,
            aboutMe: false,
            modal: false,
        };
    }

    handleModal (){
        this.setState({
            modal: !this.state.modal
        })
    }

    renderName(){
        if(!this.state.name) {
            if(window.pageYOffset < 500){
                this.setState({name: true});
            }else{
                setTimeout(this.renderName,10);
            }
        }else{
            if(window.pageYOffset >= 500){
                this.setState({name: false});
            }else{
                setTimeout(this.renderName, 10);
            }
        }

    }


    renderAboutMe(){
        if(!this.state.aboutMe){
            if((window.pageYOffset >= 300) && (window.pageYOffset <= 1500)){
                this.setState({aboutMe: true});
            }else{
                setTimeout(this.renderAboutMe, 10);
            }
        }else{
            if((window.pageYOffset < 300)){
                this.setState({aboutMe: false});
            }else{
                setTimeout(this.renderAboutMe, 10);
            }
        }
    }

    render(){
        return(
            <Container className={"default"}>
                <Container className={"home"}>
                    <Navbar route={"home"}/>
                </Container>
                <Container className={"main"}>
                    {this.renderName()}
                    <Transition in={this.state.name} timeout={200}>
                        {(state) => (
                            <h1 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="main-name">Essence Lai</h1>
                        )}
                    </Transition>
                    <Transition in={this.state.name} timeout={700}>
                        {(state) => (
                            <h4 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="main-description">Full Stack Developer, Mixologist,  Adventurous Traveller</h4>
                        )}
                    </Transition>
                    <Transition in={this.state.name} timeout={1200}>
                        {(state) => (
                            <h4 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="main-description-sub">Learning Frameworks one cocktail at a time!</h4>
                        )}
                    </Transition>
                    <Row className="find-me show-grid">
                        <Transition in={this.state.name} timeout={1200}>
                            {(state) => (
                                <Col  style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                                    className="column-small" xs={4} md={{span: 2, offset: 3}}>
                                    <a className="button-icon" href="https://github.com/essence-lai"><i className="fab fa-github fa-2x fa-icon-button"/></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.name} timeout={1000}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small" xs={4} md={2}>
                                    <a className="button-icon" href="https://www.linkedin.com/in/essence-lai-978b50a8/"><i className="fab fa-linkedin fa-2x fa-icon-button"/></a>
                                </Col>
                            )}
                        </Transition>
                        <Transition in={this.state.name} timeout={800}>
                            {(state) => (
                                <Col
                                    style={{
                                        ...defaultStyle,
                                        ...transitionStyles[state]
                                    }}
                                    className="column-small"  xs={4} md={2}>
                                    <a className="button-icon" onClick={this.handleModal}>  <FontAwesomeIcon icon="file" className="fab fa-2x fa-icon-button" /></a>
                                </Col>
                            )}
                        </Transition>
                        <Modal size="lg" centered show={this.state.modal} onHide={this.handleModal}>
                            <Modal.Body><Image  className="resume-img" src={require("./img/EssenceLai-1.png")}/>
                                        <Image  className="resume-img" src={require("./img/EssenceLai-2.png")}/></Modal.Body>
                        </Modal>
                    </Row>
                </Container>
                <Container className="about-me">
                    {this.renderAboutMe()}
                    <Transition in={this.state.aboutMe} timeout={100}>
                        {(state) => (
                            <h1 style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                className="about-me-description">
                                Hi! I'm Essence (pronounced "Ee-sense),
                                a Intermediate Full Stack dDeveloper with 3 years of work experience.
                                Always trying out new frameworks and seeking for new opportunities to make an impact in the world. <br/> <br/>
                                Checkout my github for latest for my latest projects!</h1>
                        )}
                    </Transition>
                    <Transition in={this.state.aboutMe} timeout={800}>
                        {(state) => (
                            <Container  style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                                   className="fa-grid">
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <FontAwesomeIcon icon="globe-americas" className="fa-icon fa-4x"/>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <FontAwesomeIcon icon="code" className="fa-icon fa-4x"/>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <FontAwesomeIcon icon="cocktail" className="fa-icon fa-4x"/>
                                    </Col>
                                </Row>
                            </Container>
                        )}
                    </Transition>
                    <Transition in={this.state.aboutMe} timeout={1200}>
                        {(state) => (
                            <Container  style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }} className="skill-grid">
                                <Transition in={this.state.aboutMe} timeout={1400}>
                                    {(state) => (
                                        <Row style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                        }}
                                             className="show-grid">
                                            <Col xs={4} md={4}>
                                                <h1 className="skills-title">
                                                    Traveller
                                                </h1>
                                                <h1 className="skills-description">
                                                    I plan to travel the world, experience different cultures and lifestyles.
                                                </h1>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h1 className="skills-title">
                                                    Software Developer
                                                </h1>
                                                <h1 className="skills-description">
                                                    I enjoy solving problems that people face everyday, cracking down new frameworks and design patterns that improve optimization is what I value.
                                                </h1>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h1 className="skills-title">
                                                    Mixologist
                                                </h1>
                                                <h1 className="skills-description">
                                                    I love concocting a good drink that will spark any conversation.
                                                </h1>
                                            </Col>
                                        </Row>
                                    )}
                                </Transition>
                                <Transition in={this.state.aboutMe} timeout={1600}>
                                    {(state) => (
                                        <Row
                                            style={{
                                                ...defaultStyle,
                                                ...transitionStyles[state]
                                            }}
                                            className="show-grid">
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Next Stop:
                                                </h4>
                                                <h5 className="header-description">
                                                    Barcelona
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Languages I speak:
                                                </h4>
                                                <h5 className="header-description">
                                                    Javascript, Python Java, YAML, Go, Dart, TypeScript, SQL, Latex, HTML/CSS
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    My go to Cocktail:
                                                </h4>
                                                <h5 className="header-description">
                                                    Paloma
                                                </h5>
                                            </Col>
                                        </Row>
                                    )}
                                </Transition>
                                <Transition in={this.state.aboutMe} timeout={1800}>
                                    {(state) => (
                                        <Row  style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                        }}
                                            className="show-grid">

                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Places I have been to:
                                                </h4>
                                                <h5 className="header-description">
                                                    Osaka <br/>
                                                    Hakone <br/>
                                                    Himeji <br/>
                                                    Fukoaka <br/>
                                                    Kyoto <br/>
                                                    Tokyo <br/>
                                                    Auckland <br/>
                                                    Wellington <br/>
                                                    Cabo Frio <br/>
                                                    Rio de Janeiro<br/>
                                                    Calgary<br/>
                                                    Toronto<br/>
                                                    Montreal<br/>
                                                    Puerto Vallarta<br/>
                                                    Thailand<br/>
                                                    Vietnamn<br/>
                                                    Cambodia<br/>
                                                    Guang Zhou<br/>
                                                    Hong Kong<br/>
                                                    Bei Jing<br/>
                                                    Banff<br/>
                                                    Vancouver<br/>
                                                    San Francisco<br/>
                                                    Los Angeles<br/>
                                                    Seattle<br/>
                                                    Fiji<br/>
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    Dev Tools:
                                                </h4>
                                                <h5 className="header-description">
                                                    Vue<br/>
                                                    Flutter<br/>
                                                    React<br/>
                                                    React-Native<br/>
                                                    MongoDB<br/>
                                                    PostGreSQL<br/>
                                                    Firebase<br/>
                                                    Chai<br/>
                                                    Git<br/>
                                                    Bitbucket<br/>
                                                    Trello<br/>
                                                    Asana<br/>
                                                    Meteor<br/>
                                                    Eslint<br/>
                                                    MatLab<br/>
                                                    Source tree<br/>
                                                </h5>
                                            </Col>
                                            <Col xs={4} md={4}>
                                                <h4 className="header-title">
                                                    My Favourites:
                                                </h4>
                                                <h5 className="header-description">
                                                    Old Fashioned <br/>
                                                    Amaretto Sour<br/>
                                                    Bitter Summer<br/>
                                                    Penicillin<br/>
                                                    Orange Whip<br/>
                                                    Manhattan<br/>
                                                    Hemingway Daiquiri<br/>
                                                    Negroni<br/>
                                                    Mint Julip<br/>
                                                    Cosmopolitan<br/>
                                                    Clover Club<br/>
                                                </h5>
                                            </Col>
                                        </Row>
                                    )}
                                </Transition>
                            </Container>            )}
                    </Transition>
                </Container>
            </Container>
        )
    }

}