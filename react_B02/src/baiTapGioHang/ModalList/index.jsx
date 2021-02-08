import React, { Component } from "react";

export default class ModalList extends Component {
  render() {
    const { product } = this.props;
    return (
      <tbody>
        <tr class="card-item">
          <td>{product.id}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width="50" alt />
          </td>
          <td>
            <button>-</button>1<button>+</button>
          </td>
          <td>{product.giaBan}</td>
          <td>5700000</td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    );
  }
}
