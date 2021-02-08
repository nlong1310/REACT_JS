import React, { Component } from "react";
import Button from "../Button";

export default class DanhSachSP extends Component {
  renderProductList = () => {
    const { productList, handleSelect } = this.props;
    return productList.map((product, index) => {
      return (
        <Button handleSelect={handleSelect} product={product} key={index} />
      );
    });
  };
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
