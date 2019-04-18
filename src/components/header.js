import React from "react";

import TopNav from "./top-nav";

import "./header.css";
import { connect } from "react-redux";

import { restartGame, generateAuralUpdate } from "../actions";

export function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.dispatch(generateAuralUpdate())}
        onRestartGame={() => props.dispatch(restartGame())}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}

export default connect()(Header);
