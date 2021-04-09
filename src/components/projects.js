import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 1 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/9AxEXkB.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Dice Game</h3>
                  Dice based game. This game is fully in Javascript and uses some sprite
                  images. The game is in 2D format.
                  <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/Dice-Game"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://ad-dice.netlify.app/" target="_blank">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 2 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/X0EgTVG.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Guess the number</h3>
                  Is a game that gives the user a chance to guess the correct number
                  between 1 to 20. The user have 10 tries to guess the correct number.
                  <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/GuessTheNumber"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://ad-numbergame.netlify.app/"
                    target="_blank"
                  >
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 3 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/wVqWy6C.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>SWAPI</h3>
                  Searchable single page Star Wars characters. SWAPI API to fetch and
                  display character information.
                  <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/Starwars-API"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://sw-projekt.surge.sh/" target="_blank">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 4 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/RiK1Hbl.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Quire Note App</h3>
                  Quire is an online note taking application, which enables you to create,
                  view, and manage notes in your desktop, tablet or mobile devices. You
                  can edit the title, contents, style and even add images and links.
                  <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/fe19tp1_TeamStaple"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://quire-notes.netlify.app/" target="_blank">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 1 for React Native */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/Ly428Kc.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Calculator</h3>
                  Calculator made in React Native with light & dark theme functionality.
                  <br />
                  <span>
                    <i className="fab fa-react project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                    <i className="fab fa-node project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/Calculator-ReactNative"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://snack.expo.io/@ad757/calculator"
                    target="_blank"
                  >
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 1 for React Native */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/9kYIhO3.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Color Scheme</h3>
                  A React-Native app. Create the perfect palette by customize your color
                  schemes.
                  <br />
                  <span>
                    <i className="fab fa-react project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                    <i className="fab fa-node project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/ColorScheme"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://snack.expo.io/@ad757/color-scheme-app"
                    target="_blank"
                  >
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 1 for ReactJS */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/YVQkFzd.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Weather App</h3>
                  Weather web app built in React and Styled-Components. Using Open Weather
                  API that showcase current weather. You can search weather forecast for 5
                  days with update every 3 hours by city name.
                  <br />
                  <span>
                    <i className="fab fa-react project-icon" aria-hidden="true" />
                    <i className="fab fa-sass project-icon" aria-hidden="true" />
                    <i className="fab fa-node project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/AD757/Weather-App-V2"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://ad-weather.surge.sh/" target="_blank">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 1 for ReactJS */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/1RlM7ut.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Stop watch</h3>
                  Stop watch built in React, Redux & TypeScript.
                  <br />
                  <span>
                    <i className="fab fa-react project-icon" aria-hidden="true" />
                    <i className="fab fa-typescript project-icon" aria-hidden="true" />
                    <i className="fab fa-node project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://ad-stop-watch.netlify.app/"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://github.com/AD757/Stop-Watch"
                    target="_blank"
                  >
                    Link
                  </Button>
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
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>React Native</Tab>
          <Tab>React</Tab>
        </Tabs>

        <div className="content">{this.toggleCategories()}</div>
      </div>
    )
  }
}

export default Projects
