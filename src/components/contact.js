import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} tablet={8} phone={12}>
            <h3>Alladin Daher</h3>
            <img
              src="https://i.imgur.com/3NHO4Uv.png"
              alt="cv-cover"
              style={{ height: '285px', borderRadius: '10px', margin: '50px' }}
            />
            <p style={{ width: '80%', margin: 'auto' }}>
              Looking for a passionate, dedicated and creative Frontend Web Developer?
              Contact me for more information on how I can help your team.
            </p>
          </Cell>
          <Cell col={6} tablet={8} phone={12}>
            <h2 style={{ paddingTop: '40px' }}>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '20px', fontFamily: 'Poppins' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    <a href="tel:+46737152378" target="_blank" rel="noopener noreferrer">
                      (+46) 73 715 23 78
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: '20px', fontFamily: 'Poppins' }}>
                    <i className="fas fa-envelope" aria-hidden="true" />
                    <a
                      href="mailto:alladin.daher@hotmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      alladin.daher@hotmail.com
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
