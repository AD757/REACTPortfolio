import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2 className="h2-contact">Contact me</h2>
        <br />
        <img
          src="https://i.imgur.com/3NHO4Uv.png"
          alt="cv-cover"
          style={{ height: '200px', margin: 'auto' }}
        />
        <br />
        <br />
        <p style={{ margin: 'auto', fontSize: '17px', textAlign: 'center' }}>
          Looking for a passionate, dedicated and creative Frontend Web Developer? Contact
          me for more information on how I can help your team.
        </p>
        <br />
        <form action="#" method="#">
          <label className="formLabel" htmlFor="">
            Name:
          </label>
          <input type="text" className="contactInput" />
          <br />
          <br />
          <label className="formLabel" htmlFor="">
            Email:
          </label>
          <input type="text" className="contactInput" />
          <br />
          <br />
          <label className="formLabel" htmlFor="">
            Phone:
          </label>
          <input type="text" className="contactInput" style={{ marginLeft: '-6px' }} />
          <br />
          <br />
          <label className="messageContainer" htmlFor="">
            Message:
            <br />
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="textArea1"
            style={{
              marginTop: '7px',
              border: '1.5px solid #000',
              borderRadius: '8px',
              padding: '0 105px',
            }}
          />
          <br />
          <br />
          <button
            style={{
              padding: '10px 65px',
              borderRadius: '5px',
              backgroundColor: '#26AEDF',
              color: 'white',
              fontSize: '16px',
            }}
          >
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default ContactForm
