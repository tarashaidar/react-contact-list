import React, { Component } from 'react';
import ListContacts from './ListContacts/ListContacts.controller'
import CreateContact from './CreateContact/CreateContact.controller'
import { Route } from 'react-router-dom'
import axios from 'axios';

class App extends Component {
  state = {
    contacts: []
  }

  loadPage = async () => { 
    const response = await axios.get('contacts.json')
    const contacts = response.data;
    this.setState({
      contacts
    }) 
}

  componentDidMount(){
    this.loadPage();
}

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.phone !== contact.phone)
    }))
  }

  createContact(contact) {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            />
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
      </div>
    )
  }
}

export default App;
