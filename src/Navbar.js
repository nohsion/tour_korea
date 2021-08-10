import React from 'react';

const Navbar = () => {
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="http://seoulnamsan.alltheway.kr/">관광지 <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://mijin1954.modoo.at/">음식점</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.shillahotels.com/index.do">호텔</a>
        </li>
      <li className="nav-item">
        <a className="nav-link" href="https://dept.galleria.co.kr/">쇼핑</a>
        </li>
      <li className="nav-item">
        <a className="nav-link" href="http://muanfestival.com/">축제</a>


      </li>
    </ul>
  </div>
</nav>
        );
};
export default Navbar;
