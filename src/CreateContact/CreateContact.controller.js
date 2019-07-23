import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import searlizeForm from 'form-serialize'
import ImageInput from '../ImageInput/ImageInput.controller'
import Contact from './CreateContact.view.js';

class CreateContact extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const values = searlizeForm(e.target, { hash: true });
    if(this.props.onCreateContact) {
      this.props.onCreateContact(values)
    }
  }

  render() {
    return (
      <Contact.Wrapper>
        <Link to='/' className='close-create-contact'>Close</Link>
        <Contact.Form onSubmit={this.handleSubmit}>
          <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64}/>
          <Contact.Details>
            <input type='text' placeholder='Name' name='name' required/>
            <input type='email' placeholder='Email' name='email' required/>
            <input type='tel' placeholder='Phone' name='phone' required/>
            <button style={{cursor: 'pointer'}}>Add Contact</button>
          </Contact.Details>
        </Contact.Form>
      </Contact.Wrapper>
    )
  }
}

export default CreateContact
