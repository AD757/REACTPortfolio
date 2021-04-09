import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import ContactForm from './contactForm'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" style={{ marginTop: '30px' }}>
        <div class="container con2"></div>
        <div id="contact">
          <br />
          <br />
          <Grid className="contact-grid">
            <Cell col={6} tablet={12} phone={12}>
              <ContactForm />
            </Cell>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Contact
