import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router'
import {Nav,Navbar,NavItem,Button,MenuItem} from 'react-bootstrap'


export default ({auth,onLogOut})=>{

  function renderNavItems(){
    if(!auth||!auth.authorized){
      return (
        <Nav pullRight>
          <li>
          <a className='btn-primary btn-sm login' href='http://localhost:3000/auth/twitter'>
                Log In With twitter
          </a>
          </li>
         </Nav>     
              )
    }
    return(
        <Nav pullRight>       
          <LinkContainer to={'/profile'}>
             <NavItem> 
                {auth.user.displayName}
            </NavItem>
          </LinkContainer>
          <NavItem>
            <Button onClick={()=> {onLogOut()}}>Sign Out</Button>
          </NavItem>
        </Nav>
      )
  }

    return(
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              <span className='glyphicon glyphicon-tree-conifer logo'></span>
              <span>Pineterest</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        {renderNavItems()}
      </Navbar.Collapse>
    </Navbar>
        )
      }