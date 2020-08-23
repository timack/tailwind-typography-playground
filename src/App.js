import React, { Component } from "react";
import WebFont from "webfontloader";

import "./styles/app.css";

import DemoContent from "./DemoContent";

const axios = require("axios").default;

export default class App extends Component {
  state = {
    proseSize: "",
    disableMaxWidth: false,
    fonts: [],
    headingFont: "",
    bodyFont: "",
    fontLoading: true,
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
          fontLoading: false
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

  handleFontChange = (type, e) => {
    this.setState({
      fontLoading: true
    })

    let fontName = e.target.value;
    let updateObj = {
      fontLoading: false
    };
    updateObj[type] = fontName;


    if (fontName === "") {
      this.setState(updateObj);
    }

    const _self = this;

    WebFont.load({
      google: {
        families: [fontName],
      },
      active: () => {
        _self.setState(updateObj);
      },
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

    const { fontLoading } = this.state;

    return (
      <div className="grid grid-cols-12 gap-12 p-12 h-screen bg-gray-200">
        <div className="bg-white col-span-3 shadow p-6 relative">
        {fontLoading && (
            <div className="absolute top-0 right-0 mt-3 mr-3 px-3 py-1 bg-yellow-300 text-yellow-700 flex items-center">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="cube-transparent w-4 h-4 inline mr-2 animate-spin"
              >
                <path
                  fillRule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Font loading...</span>
            </div>
          )}
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
            <h4 className="font-semibold text-sm pb-1">Body Font</h4>
            <div className="relative">
              <select
                name="fontSelection"
                id="fontSelection"
                className="w-full border border-gray-500 p-3 appearance-none"
                onChange={(e) => this.handleFontChange("bodyFont", e)}
              >
                <option value="">Default</option>
                {this.state.fonts.map((font, idx) => (
                  <option key={idx} value={font.family}>
                    {font.family}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 pr-3 right-0 top-0 flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="fill-current w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-2">
            <h4 className="font-semibold text-sm pb-1">Heading Font</h4>
            <div className="relative">
              <select
                name="fontSelection"
                id="fontSelection"
                className="w-full border border-gray-500 p-3 appearance-none"
                onChange={(e) => this.handleFontChange("headingFont", e)}
              >
                <option value="">Default</option>
                {this.state.fonts.map((font, idx) => (
                  <option key={idx} value={font.family}>
                    {font.family}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 pr-3 right-0 top-0 flex items-center">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="fill-current w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="py-2">
            <h4 className="font-semibold text-sm pb-1">Remove Max-Width</h4>
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
        <div className="bg-white col-span-9 shadow py-12 px-20 overflow-scroll relative">
          <article
            className={`mx-auto prose ${this.state.proseSize} ${
              this.state.disableMaxWidth ? "max-w-none" : ""
            }`}
          >
            <DemoContent
              headingFont={this.state.headingFont}
              bodyFont={this.state.bodyFont}
            />
          </article>
        </div>
      </div>
    );
  }
}
