import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
        return (
          <div className="page-footer red-darken-2">
            <div className="container">
              <div className="row">
                <div className="col s12 l1">
                  <ul className="socialicon">
                    <li>
                      <a
                        href="#"
                        className="btn-floating btn-small red darken-2"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="btn-floating btn-small red darken-2"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="btn-floating btn-small red darken-2"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="btn-floating btn-small red darken-2"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col s12 l3">
                  <h5>Partners</h5>
                  <p>
                    <a href="#">Solid Palace Pharmaceutical</a>
                  </p>
                  <p>
                    <a href="#">Glory Sound Prep.</a>
                  </p>
                  <p>
                    <a href="#">Living clean Distributors.</a>
                  </p>
                </div>
                <div className="col s12 l3">
                  <h5>Resources</h5>
                  <p>
                    <a href="#">https://learnmoreonhealth.com</a>
                  </p>
                  <p>
                    <a href="#">https://learnmoreonhealth.com</a>
                  </p>
                  <p>
                    <a href="#">https://learnmoreonhealth.com</a>
                  </p>
                </div>
                <div className="maillist col s12 l5">
                  <div class="row">
                    <form class="col s12">
                      <div class="row">
                        <div class="input-field col s6">
                          <input id="email" type="email" class="validate"/>
                          <label for="email">Email</label>
                        </div>
                        <div class="input-field col s6">
                          <button class="btn waves-effect waves-light red darken-4" type="submit" name="action">submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
// <div>
//   <div className="input-field">
//     <i className="material-icons prefix white-text">email</i>
//     <input type="email" id="email" />
//     <label for="email">Your Email</label>
//   </div>
//   <a class="waves-effect waves-light btn red darken-4">submit</a>
// </div>;