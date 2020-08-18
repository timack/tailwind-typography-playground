import React, { Component } from 'react'

export default class DemoContent extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>This is a test Heading</h1>
                <h2>Sub Heading</h2>
                <p>This is a paragraph</p>
                <blockquote>This is a blockquote</blockquote>
                <ul>
                    <li>Unordered Item 1</li>
                    <li>Unordered Item 2</li>
                    <li>Unordered Item 3</li>
                </ul>
                <ol>
                    <li>Ordered Item 1</li>
                    <li>Ordered Item 2</li>
                    <li>Ordered Item 3</li>
                </ol>

                <h3>Smaller Subhead</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bob Smith</td>
                            <td>21</td>
                            <td>8033 High Ridge St., South Lyon, MI 48178</td>
                        </tr>
                        <tr>
                            <td>Jimbo Jones</td>
                            <td>14</td>
                            <td>7419 Purple Finch St., Naugatuck, CT 06770</td>
                        </tr>
                        <tr>
                            <td>Ethan Hunt</td>
                            <td>34</td>
                            <td>628 W. Union Street, Canton, GA 30114</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}