// import { render } from "@testing-library/react";
import React from "react";

export class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Price: 0,
      Stock: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      Name: e.target.value,
      Price: this.state.Price,
      Stock: this.state.Stock,
    });
  }

  handlePriceChange(e) {
    this.setState({
      Name: this.state.Name,
      Price: e.target.value,
      Stock: this.state.Stock,
    });
  }

  handleStockChange(e) {
    this.setState({
      Name: this.state.Name,
      Price: this.state.Price,
      Stock: e.target.checked,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Register Product</h2>
        <dl>
          <dt>Name</dt>
          <dd><input type="text" onChange={this.handleNameChange} /></dd>
          <dt>Price</dt>
          <dd><input type="number" onChange={this.handlePriceChange} /></dd>
          <dt>Stock</dt>
          <dd><input type="checkbox" onChange={this.handleStockChange} /></dd>
        </dl>
        <h3>Details</h3>
        <dl>
          <dt>Name</dt>
          <dd>{this.state.Name}</dd>
          <dt>Price</dt>
          <dd>{this.state.Price}</dd>
          <dt>Stock</dt>
          <dd>{this.state.Stock ? "Available" : "Out of Stock"}</dd>
        </dl>
      </div>
    );
  }
}
