import React, { Component } from 'react';
import First from "./images/image1.jpg";
import Second from "./images/image2.jpg";
import Third from "./images/image3.jpg";
import Fourth from "./images/image4.jpg";
import Fifth from "./images/image5.jpg";

export default class Seel extends Component {
        
    render() {
        
        return (
          <div class="slider">
            <ul class="slides">
              <li>
                <img src={First} />
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img src={Second} />
                <div class="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img src={Third} />
                <div class="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img src={Fourth} />
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img src={Fifth} />
                <div class="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        );
    }
}
