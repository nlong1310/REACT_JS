import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        className="footer"
        style={{
          backgroundColor: "green",
          textAlign: "center",
          padding: "15px 0",
          color: "white",
        }}
      >
        Copyright by Mr.Nguyen
      </div>
    );
  }
}
