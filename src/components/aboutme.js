import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Pic from './cv.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <Grid className="about-grid">
          <Cell col={4} tablet={8} phone={12}>
            <img
              src={Pic}
              alt="avatar"
              style={{ width: '250px', margin: '50px', borderRadius: '5px' }}
            />
          </Cell>
          <Cell col={6} tablet={8} phone={12}>
            <h2 style={{ paddingTop: '40px' }}>About Me</h2>
            <hr />
            <p style={{ paddingTop: '20px', margin: 'auto' }}>
              My name is Alladin Daher, born and raised in Uppsala, Sweden. I'm a Frontend
              Web Developer in Stockholm, Sweden. If you navigate to the "Projects"
              section of this website, you'll see some of the Frontend web work using
              HTML5/CSS3, Javascript, React & React Native. With my passion, education,
              and experience I love to develop and build websites and applications. When
              not coding, you will find me working out, playing football or gaming.
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About
