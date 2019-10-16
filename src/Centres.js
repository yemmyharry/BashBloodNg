import React, { Component } from "react";
import image1 from "./images/cardImage1.jpg";
import image2 from "./images/cardImage2.jpg";
import image3 from "./images/cardImage3.jpg";

export default class Centre extends Component {
  render() {
    return (
      <div>
        <div className="component">
          <div className="row search">
            <div className="col l6 s12 offset-l1">
              <input
                type="text"
                className="searchInput"
                placeholder="Search..."
              ></input>
            </div>
            <div className="col l2 s6">
              <button
                class="btn waves-effect waves-light blue darken-4"
                type="submit"
                name="action"
              >
                submit
              </button>
            </div>
            <div className="col l2 s6 right">
              <a
                class="dropdown-trigger btn #bdbdbd grey lighten-1"
                href="#"
                data-target="dropdown1"
              >
                <i class="material-icons">arrow_drop_down</i>filter
              </a>
            
              <ul id="dropdown1" class="dropdown-content">
                <li>
                  <a href="#!">Aba-South</a>
                </li>
                <li>
                  <a href="#!">Aba-North</a>
                </li>
                <li>
                  <a href="#!">Obi-Ngwa</a>
                </li>
                <li>
                  <a href="#!">Osisioma</a>
                </li>
              </ul>
            </div>
          </div>
          <Demo />
          <Demo />
        </div>
      </div>
    );
  }
}


const Demo = () => {
  return (
    <div>
      <div className="row">
        <div className="card small col s12 m6 l4">
          <div className="card-image">
            <img src={image1} />
          </div>
          <div className="card-content">
            <span className="card-title">General Hospital,Aba</span>
            <p>
              <span>Location:</span> 44c first upstairs, behind new clinic road,
              Aba
            </p>
          </div>
        </div>
        <div className="card small col s12 m6 l4">
          <div className="card-image">
            <img src={image3} />
          </div>
          <div className="card-content">
            <span className="card-title">General Hospital,Aba</span>
            <p>
              <span>Location:</span> 44c first upstairs, behind new clinic road,
              Aba
            </p>
          </div>
        </div>
        <div className=" card small col s12 m6 l4">
          <div className="card-image">
            <img src={image1} />
          </div>
          <div className="card-content">
            <span className="card-title">General Hospital,Aba</span>
            <p>
              <span>Location:</span> 44c first upstairs, behind new clinic road,
              Aba
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}