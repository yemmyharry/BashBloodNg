import React, { Component } from 'react';
import Cells from '../src/images/girlcross.jpg'
class UnderNav extends Component {
    
    render() { 
        return (
          <div className="row mouse">
            {/* <img src={Cells} alt="" className="responsive-img cells"/> */}
            <div className="btn col l2 s6 offset-l2 waves-effect waves-light red darken-4 ">
              {" "}
              Donate Blood{" "}
            </div>
            <div className="btn col l2 s6 offset-l4 waves-effect waves-light red darken-4">
              {" "}
              Request Blood{" "}
            </div>
          </div>
        );
    }
}
 
export default UnderNav;