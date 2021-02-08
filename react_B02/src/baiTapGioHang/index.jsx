import React, { Component } from "react";
import Title from "./Title";
import GioHang from "./GioHang";
import DanhSachSP from "./DanhSachSP";
import Modal from "./Modal";
import ThongSo from "./ThongSo";

export default class BaiTapGioHang extends Component {
  state = {
    productSelected: {
      id: 1,
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 5700000,
      heDieuHanh: "Android 9.0 (Pie)",
      hinhAnh: "./img/vsphone.jpg",
      maSP: 1,
      manHinh: 'AMOLED, 6.2", Full HD+',
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "VinSmart Live",
    },
  };
  productList = [
    {
      id: 1,
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 5700000,
      heDieuHanh: "Android 9.0 (Pie)",
      hinhAnh: "./img/vsphone.jpg",
      maSP: 1,
      manHinh: 'AMOLED, 6.2", Full HD+',
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "VinSmart Live",
    },
    {
      id: 2,
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 5700000,
      heDieuHanh: "Android 9.0 (Pie)",
      hinhAnh: "./img/meizuphone.jpg",
      maSP: 1,
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "Meizu 16Xs",
    },
    {
      id: 3,
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 5700000,
      heDieuHanh: "Android 9.0 (Pie)",
      hinhAnh: "./img/applephone.jpg",
      maSP: 1,
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "Iphone XS Max",
    },
  ];
  handleSelect = (productSelected) => {
    this.setState({
      productSelected,
    });
  };
  render() {
    return (
      <section className="container">
        <Title />
        <GioHang />
        <DanhSachSP
          handleSelect={this.handleSelect}
          productList={this.productList}
        />
        <Modal
          handleSelect={this.handleSelect}
          productList={this.productList}
        />
        <ThongSo productSelected={this.state.productSelected} />
      </section>
    );
  }
}
