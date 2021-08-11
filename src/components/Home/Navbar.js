import { Button } from '@material-ui/core';
import React from 'react';
import "./Navbar.css"

const obj = {
  0: 'tourspot',
  1: 'food',
  2: 'hotel',
  3: 'shopping',
  4: 'festivals'
}

class Navbar extends React.Component {
  state = {
    activeTab: 0
  }
  
  clickHandler = id => {
    this.setState({activeTab: id})
    window.scrollTo({ top: document.getElementsByClassName(obj[id])[0].offsetTop, behavior: "smooth" });
  }
  clickToggle = () => {
    console.log(document.querySelector('.navbar__menu').classList.toggle('active'))

  }
  render() {
    return (
      <nav class="navbar">
        <div class="navbar__logo">
          <i class="fas fa-plane"></i>
          <a href="#">Tour Korea</a>
        </div>
  
        <ul class="navbar__menu">
          <li className="nav-item" onClick={() => this.clickHandler(0)}>
            <Button className="nav-link">관광지</Button>
          </li>
          <li className="nav-item" onClick={() => this.clickHandler(1)}>
            <Button className="nav-link">음식점</Button>
          </li>
          <li className="nav-item" onClick={() => this.clickHandler(2)}>
            <Button className="nav-link">호텔</Button>
          </li>
          <li className="nav-item" onClick={() => this.clickHandler(3)}>
            <Button className="nav-link">쇼핑</Button>
          </li>
          <li className="nav-item" onClick={() => this.clickHandler(4)}>
            <Button className="nav-link">축제</Button>
          </li>
        </ul>
  
        <a class="navbar__toggleBtn" onClick={this.clickToggle}>
          <i class="fas fa-bars"></i>
        </a>
      </nav>

    )
  }

  
};
export default Navbar;
