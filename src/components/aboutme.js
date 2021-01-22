import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Pic from './cv.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Grid className="about-grid">
                <Cell col={4} tablet={8} phone={12}>
                        <img src={Pic} alt="avatar" style={{width: "250px", margin: '50px', borderRadius: "10px"}}/>
                    </Cell>
                    <Cell col={8} tablet={8} phone={12}>
                        <h2 style={{ paddingTop: '40px'}}>About Me</h2> 
                        <hr />
                        <p style={{ paddingTop: '40px'}}>My name is Alladin Daher, born and raised in Uppsala, Sweden.  I'm a Frontend Web Developer in Stockholm, Sweden. I have experience in frontend web dev but am interested in pursuing fullstack dev roles as well.  If you navigate to the "Projects" section of this website, you'll see some of the Frontend web work using HTML5, CSS3, Javascript, React & Node.js.  I'm looking for a full time job and I'm actively applying to related jobs.  I am open to frontend web dev and fullstack web dev.  In a company, I value culture, impact and mission. Please feel free to contact me for job opportunities!</p>  
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;

