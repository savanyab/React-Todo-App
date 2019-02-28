import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Nav, NavItem, NavLink } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('Itt töltődik be - App.js');
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs style={{ backgroundColor: '#a9b0bc' }}>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{color: "white"}}>Todos</NavLink>
          </NavItem>
        </Nav>


        <div className='App'>
          <TodoList />
        </div>

        <footer class="page-footer font-small teal pt-4" style={{ backgroundColor: '#8d94a0'}}>
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat. Itaque, culpa?</p>
              </div>
              <hr class="clearfix w-100 d-md-none pb-3" />
              <div class="col-md-6 mb-md-0 mb-3">
                <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright text-center py-3" >© 2018 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/" style={{color: "lightgray"}}> MDBootstrap.com</a>
          </div>
        </footer>

      </div>

    );
  }
}

export default App;
