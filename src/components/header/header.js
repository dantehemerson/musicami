import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { keys } from '../../constants'

import Logo from './static/img/logo.png'
import './static/css/header.css'

class Header extends React.Component {
  constructor(props) {
     super(props);
      this.search = this.search.bind(this);
   }
   componentDidMount() {
      let searchElement = document.getElementById('search-input')
      if(searchElement) {
         searchElement.addEventListener('keyup', event => {
            event.preventDefault()
            if(event.keyCode === keys.ENTER) {
               this.search()
            }
         })
      } 
   }

   search() {
      const searchElement = document.getElementById('search-input')

      const query = searchElement.value.replace(/^\s+|\s+$/g, '') // Trailing whitespaces
      if(query.length === 0) {
        return
      }      
      searchElement.blur()
      this.props.history.push('/search/' + query)
    }

  	render() {
    	return (
         <div>
            <header className="app-header">
               <div className="uk-container">
                  <nav className="uk-navbar uk-navbar-container uk-navbar-transparent navbar-custom">
                     <div className="uk-navbar-left">                       
                        <Link className="uk-navbar-item uk-logo uk-visible@s" to='/'><img src={Logo} alt="Musicami"/></Link>
                     </div>                     

                     <div className="anyaudio-search-container uk-navbar-left uk-nav-center-sm">
                        <div className="uk-search uk-search-default anyaudio-search">
                           <span className="uk-search-icon" uk-icon="icon: search" />
                           <input
                             className="uk-search-input border-radius40"
                              id='search-input'
                              type="text"
                              placeholder="Search"
                            />
                       </div>
                     </div>

                  </nav>
               </div>
           </header>
         </div>
    	)
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired
}

export default Header