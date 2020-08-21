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
      <div className="grid grid-cols-12 gap-12 p-12 h-screen bg-gray-200">
        <div className="bg-white col-span-3 rounded-lg shadow p-6">
          <h3 className="mb-3 font-semibold text-lg">Configure</h3>

          <div className="py-2">
            <h4 className="font-semibold text-sm pb-1">Size</h4>
            <div className={`grid grid-cols-${sizeOptions.length} gap-2`}>
              {sizeOptions.map((option, idx) => (
                <button
                  key={idx}
                  className={`border border-gray-500 text-xs uppercase py-2 px-4 hover:bg-gray-700 hover:text-gray-200 ${
                    this.state.proseSize === option.class
                      ? "bg-gray-800 text-gray-200"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={(e) => this.handleSizeClick(option.class, e)}
                >
                  {option.display}
                </button>
              ))}
            </div>
          </div>

          <div className="py-2">
            <h4 className="font-semibold text-sm pb-1">
              Font
            </h4>
            <div className="relative">
              <select
                name="fontSelection"
                id="fontSelection"
                className="w-full border border-gray-500 p-3 appearance-none"
              >
                <option value="">Default</option>
                {this.state.fonts.map((font, idx) => (
                  <option key={idx} value="">
                    {font.family}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 pr-3 right-0 top-0 flex items-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="fill-current w-6 h-6"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </div>
            </div>
          </div>

          <div className="py-2">
            <h4 className="font-semibold text-sm pb-1">
              Remove Max-Width
            </h4>
            <div className="flex items-baseline">
              <input
                type="checkbox"
                name="disableMaxWidth"
                id="disableMaxWidth"
                checked={this.state.disableMaxWidth}
                onChange={this.handleMaxWidthClick}
                className="mr-3"
              />
              <label htmlFor="disableMaxWidth">Disable Max Width</label>
            </div>
          </div>
        </div>

        {/* Example page */}
        <div className="bg-white col-span-9 rounded-lg shadow py-12 px-20 overflow-scroll">
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
