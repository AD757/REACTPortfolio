import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Temperature from './components/temperature';




const API_URL = 'http://api.weatherstack.com/current?access_key=7b25d09406b2cd338f0eebc484e872db&query=Stockholm,SE&units=m'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    let temp = null;
    if (this.state.data) {
    temp = this.state.data.current.temperature;
    }
    

    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Alladin Daher</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Temperature temperature={temp} />
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Alladin Daher</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Temperature temperature={temp} />
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>


</div>

    );
  }
}
export default App;