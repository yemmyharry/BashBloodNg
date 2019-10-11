import React, { Component } from 'react';
import Trite from './images/image1.jpg'

export default class Testimony extends Component {
    render() {
        return (
            <div className="comtainer">
                <div className="row">
                    <div className=" col s12 m12 l4">
                        <figure>
                            <img src={Trite} />
                            <figcaption>
                                <p>This is a sample text</p>
                                <h5>John Doe</h5>
                            </figcaption>
                        </figure>
                    </div>
                    <div className=" col s12 m12 l4">
                        <figure>
                            <img src={Trite} />
                            <figcaption>
                                <p>This is a sample text</p>
                                <h5>John Doe</h5>
                            </figcaption>
                        </figure>
                    </div>
                    <div className=" col s12 m12 l4">
                        <figure>
                            <img src={Trite} />
                            <figcaption>
                                <p>This is a sample text</p>
                                <h5>John Doe</h5>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            );
        }
    }