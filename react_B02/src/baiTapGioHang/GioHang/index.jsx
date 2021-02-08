import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    return (
      <div className="container text-center my-2">
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng (0)
        </button>
      </div>
    );
  }
}
