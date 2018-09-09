import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'

import './static/css/header.css'

export default class Header extends React.Component {
   componentDidMount() {
      document.getElementById('search-input')
         .addEventListener('keyup', event => {
            event.preventDefault()
            if(event.keyCode === 13) {
               this.search()
            }
         })
   }

   search() {
      const query = document.getElementById('search-input').value.replace(/^\s+|\s+$/g, '') // Trailing whitespaces
      if(query.length === 0) {
        return
      }      
      this.props.history.push('/search/' + query)
    }

  	render() {
    	return (
      		<Navbar>
      			<Navbar.Header>
      				<Navbar.Brand>
      						<Link to='/'>Musicami</Link>
      				</Navbar.Brand>
      			</Navbar.Header>
      			<Navbar.Form pullLeft>
      				<FormGroup>
      					<FormControl id="search-input" type="text" placeholder="Search"/>
      				</FormGroup>      				
      				<Button type="submit" onClick={ this.search.bind(this) }>Submit</Button>
      			</Navbar.Form>
      		</Navbar>
    	)
  }
}