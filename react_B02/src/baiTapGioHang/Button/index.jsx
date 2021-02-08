import React, { Component } from "react";

export default class Button extends Component {
  hanldeClick = () => {
    const { product, handleSelect } = this.props;
    console.log(product);
    handleSelect(product);
  };
  render() {
    const { product } = this.props;

    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button onClick={this.hanldeClick} className="btn btn-success">
              Chi tiết
            </button>
            <button onClick={this.hanldeClick} className="btn btn-danger">
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
