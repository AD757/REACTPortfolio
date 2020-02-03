import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12} tablet={8} phone={4}>
          <img
              src="https://i.imgur.com/GxvAbxm.jpg" alt="cv-cover"
              style={{height: '250px', borderRadius: "50px",  margin: '50px'}}
               />

            <div className="banner-text">
              <h1>Frontend Web Developer</h1>

            <hr/>

          <p>HTML5/CSS3 | Javascript | React |  NodeJS </p>

        <div className="social-links">
          
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/alladin-daher-404a92117" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/AD757/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

           {/* Email */}
           <a href="mailto:alladin.daher@hotmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope" aria-hidden="true" />
          </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/ad.frontend/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>
          

        </div>
            </div>
         
          </Cell>
        </Grid>
      </div>
    )
  }
}




export default Landing;
