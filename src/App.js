import React, { Component } from "react";
import "./styles/app.css";

import DemoContent from "./DemoContent";

const axios = require("axios").default;

export default class App extends Component {

  state = {
    proseSize: "",
    disableMaxWidth: false,
    fonts: [],
  };



  componentDidMount() {
    // Load font list from google
    const _self = this;

    axios
      .get(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD62E9TC6q-LYMkBa-mnH6iKZxSfYVjKiI"
      )
      .then(function (response) {
        _self.setState({
          fonts: response.data.items,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert("Sorry... looks like there was a problem loading the font list");
      });
  }

  handleSizeClick = (size) => {
    this.setState({
      proseSize: size,
    });
  };

  handleMaxWidthClick = () => {
    this.setState({
      disableMaxWidth: !this.state.disableMaxWidth,
    });
  };

  render() {
    const sizeOptions = [
      { display: "S", class: "prose-sm" },
      { display: "M", class: "" },
      { display: "L", class: "prose-lg" },
      { display: "XL", class: "prose-xl" },
      { display: "XXL", class: "prose-2xl" },
    ];

    return (
      <div className="grid grid-cols-12 gap-12 p-12 h-screen bg-gradient-to-r from-green-300 via-yellow-200 to-red-400">
        <div className="bg-white col-span-3 rounded-lg shadow-xl p-6">
          <h3 className="mb-3 uppercase text-gray-700 font-semibold text-base tracking-widest">
            Configure
          </h3>

          <h4 className="uppercase text-gray-600 font-semibold text-sm tracking-widest">
            Size
          </h4>
          <div className="flex items-stretch bg-gray-600">
            {sizeOptions.map((option, idx) => (
              <button
                key={idx}
                className={`flex-1 text-xs uppercase py-2 px-4 text-gray-200 font-bold border-white border-r last:border-r-0 hover:bg-gray-700 ${
                  this.state.proseSize === option.class
                    ? "bg-gray-800"
                    : "bg-gray-600"
                }`}
                onClick={(e) => this.handleSizeClick(option.class, e)}
              >
                {option.display}
              </button>
            ))}
          </div>
          <h4 className="uppercase text-gray-600 font-semibold text-sm tracking-widest">
            Font
          </h4>
          <div>
            <select name="" id="">
              <option value="">Default</option>
              {this.state.fonts.map((font, idx) => (
                <option key={idx} value="">
                  {font.family}
                </option>
              ))}
            </select>
          </div>
          <h4 className="uppercase text-gray-600 font-semibold text-sm tracking-widest">
            Remove Max-Width
          </h4>
          <div>
            <label htmlFor="">Disable Max Width</label>
            <input
              type="checkbox"
              name=""
              id=""
              checked={this.state.disableMaxWidth}
              onChange={this.handleMaxWidthClick}
            />
          </div>
        </div>
        <div className="bg-white col-span-9 rounded-lg shadow-xl py-12 px-20 overflow-scroll">
          <article
            className={`mx-auto prose ${this.state.proseSize} ${
              this.state.disableMaxWidth ? "max-w-none" : ""
            }`}
          >
            <DemoContent />
          </article>
        </div>
      </div>
    );
  }
}
