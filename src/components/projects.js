import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Grid>
                        <Cell col={6} tablet={12} phone={12}  id="project-cell">
                            {/* Project 1 for Javascript */}
                            <Card shadow={5} id="project-card">
                                <CardTitle style={{ color: 'black', height: '250px', background: 'url(https://i.imgur.com/9AxEXkB.png) center / cover' }}></CardTitle>
                                <CardText>
                                    <h3>Dice Game</h3>
                                     Dice based game. This game is fully in Javascript and uses some sprite images.  The game is in 2D format.<br />
                                    <span>
                                        <i className="fab fa-html5 project-icon" aria-hidden="true" />
                                        <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                                        <i className="fab fa-js-square project-icon" aria-hidden="true" />
                                    </span>
                                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AD757/Dice-Game" target="_blank">GitHub</Button>
                                </CardActions>
                            </Card>
                        </Cell>


                        <Cell col={6} tablet={12} phone={12}  id="project-cell">
                            {/* Project 2 for Javascript */}
                            <Card shadow={5} id="project-card">
                                <CardTitle style={{ color: 'black', height: '250px', background: 'url(https://i.imgur.com/HeY0szC.png) center / cover' }}></CardTitle>
                                <CardText>
                                    <h3>Budget App</h3>
                                    A web budgeting app that calculates basic budget based on a list of income and expenses.<br />
                                    <span>
                                        <i className="fab fa-html5 project-icon" aria-hidden="true" />
                                        <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                                        <i className="fab fa-js-square project-icon" aria-hidden="true" />
                                    </span>
                                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AD757/Budget-App" target="_blank">GitHub</Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={6} tablet={12} phone={12} id="project-cell">
                            {/* Project 3 for Javascript */}
                            <Card shadow={5} id="project-card">
                                <CardTitle style={{ color: 'black', height: '250px', background: 'url(https://i.imgur.com/iGJ7qEk.png) center / cover' }}></CardTitle>
                                <CardText>
                                    <h3>Calculator</h3>
                                    Web calculator designed with dark theme. Built with HTML, CSS & Javascript.<br />
                                    <span>
                                        <i className="fab fa-html5 project-icon" aria-hidden="true" />
                                        <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                                        <i className="fab fa-js-square project-icon" aria-hidden="true" />
                                    </span>
                                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AD757/Calculator" target="_blank">GitHub</Button>
                                </CardActions>
                            </Card>
                        </Cell>

                        <Cell col={6} tablet={12} phone={12} id="project-cell">
                            {/* Project 4 for Javascript */}
                            <Card shadow={5} id="project-card">
                                <CardTitle style={{ color: 'black', height: '250px', background: 'url(https://i.imgur.com/RiK1Hbl.png) center / cover' }}></CardTitle>
                                <CardText>
                                    <h3>Quire Note App</h3>
                                    Quire is an online note taking application, which enables you to create, view, and manage notes in your desktop, tablet or mobile devices. You can edit the title, contents, style and even add images and links.<br />
                                    <span>
                                        <i className="fab fa-html5 project-icon" aria-hidden="true" />
                                        <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                                        <i className="fab fa-js-square project-icon" aria-hidden="true" />
                                    </span>
                                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/AD757/fe19tp1_TeamStaple" target="_blank">GitHub</Button>
                                </CardActions>
                            </Card>
                        </Cell>


                    </Grid>

                    
                </div>
            )
        }

        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Grid>
                    <Cell col={6} tablet={12} phone={12}  id="project-cell">
                         {/* Project 1 for NodeJS */}
                            <Card shadow={5} id="project-card">
                            <CardTitle style={{ color: 'black', height: '250px', background: 'url(https://i.imgur.com/Rk6TK2E.png) center / cover' }}></CardTitle>
                            <CardText>
                                <h3>Forkify</h3>
                                Recipe Searching Application using JavaScript. Powered by Food2Fork API.<br />
                                <span>
                                <i className="fab fa-html5 project-icon" aria-hidden="true" />
                                <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                                <i className="fab fa-js-square project-icon" aria-hidden="true" />
                                <i className="fab fa-node project-icon" aria-hidden="true" />
                                </span>
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/AD757/Forkify" target="_blank">GitHub</Button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
            
        </div>
            )
        }

        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Grid>
                    <Cell col={6} tablet={12} phone={12}  id="project-cell">
                         {/* Project 1 for ReactJS */}
                            <Card shadow={5} id="project-card">
                            <CardTitle style={{ color: 'black', height: '250px', background: 'url(https://i.imgur.com/e4zWJ16.png) center / cover' }}></CardTitle>
                            <CardText>
                                <h3>React Portfolio</h3>
                                Portfolio made using React with an API Call. React components by React-MDL.<br />
                                <span>
                                <i className="fab fa-react project-icon" aria-hidden="true" />    
                                <i className="fab fa-html5 project-icon" aria-hidden="true" />
                                <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                                <i className="fab fa-js-square project-icon" aria-hidden="true" />
                                <i className="fab fa-node project-icon" aria-hidden="true" />

                                </span>
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/AD757/REACTPortfolio" target="_blank">GitHub</Button>
                        </CardActions>
                    </Card>
                </Cell>
            </Grid>
            
        </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <div className="content">{this.toggleCategories()}</div>

            </div>
        )
    }
}

export default Projects;
