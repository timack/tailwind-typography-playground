import React, { Component } from "react";
import "./styles/app.css";

import DemoContent from "./DemoContent";

export default class App extends Component {
  state = {
    proseSize: "",
  };

  handleSizeClick = (size) => {
    this.setState({
      proseSize: size,
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
      <div className="bg-gray-400 grid grid-cols-12 gap-12 p-12 h-screen">
        <div className="bg-white col-span-3 rounded shadow-xl p-6">
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
                  this.state.proseSize === option.class ? "bg-gray-800" : "bg-gray-600"
                }`}
                onClick={(e) => this.handleSizeClick(option.class, e)}
              >
                {option.display}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white col-span-9 rounded shadow-xl py-6 px-20 overflow-scroll">
          <article className={`prose ${this.state.proseSize}`}>
            <DemoContent />
          </article>
        </div>
      </div>
    );
  }
}
