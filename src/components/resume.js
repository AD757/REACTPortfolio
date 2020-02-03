import React, { Component } from 'react';
import { Grid, Cell,  } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img
              src="https://i.imgur.com/tdjfgOo.jpg?1" alt="cv-cover"
              style={{height: '270px', borderRadius: "10px"}}
               />
            </div>
            <h3 style={{paddingTop: '2em'}}>Alladin Daher</h3>
            <h4 style={{color: 'black'}}>Frontend Web Developer</h4>
            <hr style={{borderTop: '3px solid #43cea2'}}/>
            <p>Creative, dedicated and hardworking Front End Web Developer with a passion for Javascript.  Eager to learn more technologies, and always trying to improve and better my skills in the technologies already in my skillset.  Looking to work and be a part of an amazing developer team.</p>
            <hr style={{borderTop: '3px solid #43cea2'}}/>
            <h5>Location</h5>
            <p>Uppsala, Sweden</p>
            <h5>Phone</h5>
            <p>(+46) 73 715 23 78</p>
            <h5>Email</h5>
            <p>alladin.daher@hotmail.com</p>
            <h5>Github</h5>
            <p>https://github.com/AD757</p>
            <hr style={{borderTop: '3px solid #43cea2'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
                 startYear={2007}
                 endYear={2010}
                 schoolName="Lundellskaskolan"
                 schoolDescription="Social Science and Economics"
                  />

            <Education
              startYear={2019}
              endYear={2021}
              schoolName="KYH"
              schoolDescription="Frontend Web Developer"
               />

                <hr style={{borderTop: '3px solid #00D4FF'}} />

                <h2>Courses</h2>
                <Education
              startYear={2019}
              endYear={2020}
              schoolName="Udemy"
              schoolDescription= "The Complete JavaScript Course 2020" 
               /> 

                <hr style={{borderTop: '3px solid #00D4FF'}} />


              <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={2020}
              jobName="Strength & Conditioning Coach"
              jobDescription="Managed sports teams and groups of 1 to 25 athletes, youth to senior sports teams, in muscle activation, agility, weight lifting, and conditioning drills. Created and implemented strength, conditioning, speed, agility, quickness program for sports teams. Educated the athletes on the importance of the exercises such as; benefits of the lifts, what muscles are being used, different energy systems and proper nutrition and hydration"
              />

              <Experience
                startYear={2014}
                endYear={2020}
                jobName="Machine Operator"
                jobDescription="Procured materials and supplies to complete daily tasks. Recorded inside and outside process readings on daily log sheets. Developed deep understanding of regulatory requirements concerning quality, reporting standards, emergency notifications, permit renewals and inspections."
                />
              <hr style={{borderTop: '3px solid #00D4FF'}} />
              
              <h2>Skills</h2>
              <Skills
                skill="HTML5/CSS3 "
                progress={80}
                />
                <Skills
                  skill="Javascript"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
