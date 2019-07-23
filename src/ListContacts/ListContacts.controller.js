import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListContact from './ListContacts.view.js';

class ListContacts extends Component {
  state = {
    term: ''
  }

  searchingFor(term) {
    return function (x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

  searchHandler = (event) => {
    this.setState({
        term: event.target.value
    })
}

  render() {

    return (
      <ListContact.Wrapper>

        <h3>Contact List</h3>

        <ListContact.Search>
          <input type='text' placeholder='Search contacts...' onChange={this.searchHandler} value={this.state.term}/>
          <Link to='/create'className='add-contact'>Add Contact</Link>
        </ListContact.Search>

      <ol>
      {this.props.contacts.filter(this.searchingFor(this.state.term)).map( contact => (
        <li key={contact.phone}>
              <ListContact.Avatar style={{
                backgroundImage: `url(${contact.avatarURL})`}}> 
              </ListContact.Avatar>
              <ListContact.Details>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </ListContact.Details>
              <button onClick={() => this.props.onDeleteContact(contact)}>
                Remove
              </button>
        </li>
      ))}
      </ol>

      </ListContact.Wrapper>
    )
  }
}

export default ListContacts
