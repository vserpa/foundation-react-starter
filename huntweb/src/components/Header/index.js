import React from "react";

import "./style.css";

// stateless
const Header = () => (
  <header id="main-header">
    <a href="/">System Running</a>
  </header>
);

// with state
// class Header extends Component {
//     render() {
//         return <h1>Hello</h1>
//     }
// }

export default Header;
