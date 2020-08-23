import React, { Component } from 'react'
import {Helmet} from "react-helmet";

export default class Header extends Component {
    render() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>Tailwind Typography Playground</title>
            </Helmet>
        )
    }
}
