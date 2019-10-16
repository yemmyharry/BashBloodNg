import React, {Component, Fragment} from 'react';
import Navbar from './Navbar'
import Footer from './Footer'

class Donation extends Component{
    render(){
        return(
           <Fragment>
            <Navbar/>
            <div>
                <header className="head">
                <a href="https://redcrossnigeria.org/donations" class="blue lighten-1 btn">Make A Blood Donation Today</a>
                </header> <br></br>

                {/* below is a link buttons */}
                <div className="container">
                   <a href="https://www.redcrossblood.org/hosting-a-blood-drive/learn-about-hosting/why-host-a-blood-drive.html" class=" blue lighten-1 btn ">Why give Blood</a>
                   <a href="https://www.redcrossblood.org/donate-blood/blood-donation-process/what-happens-to-donated-blood.html" class=" grey lighten-1 btn">What to expect</a>
                   <a href="https://www.redcrossblood.org/donate-blood/how-to-donate/how-blood-donations-help.html" class=" grey lighten-1 btn">How Blood donation helps</a>
                   <a href="https://www.redcrossblood.org/giveplatelets.html" class=" grey lighten-1 btn">Schedule an appointments</a>
                   <a href="https://redcrossnigeria.org/fundamentalprinciples" class=" grey lighten-1 btn">Fundamental Principals</a>
                   </div> 
                <section className="flee">
                    <>Blood donating is important because, maintaining an adequate Blood in 
                     our community secures Blood transfussions for patients. It gives Donors a medical 
                     check at no cost. Free cookies, Juice and satisfactions for helping others</>
                </section> <br></br>

                {/* below are the list of eligibility requirements */}
                <div  className="check">Eligibility Requirements For Whole Blood Donation</div>
                <ul className="list">
                    <li>You must be in good health and feeling well.</li>
                    <li>You must weigh at least 110 lbs.</li>
                    <li>Donation frequency: Every 56 days.</li>
                    <li>You must be at least 16 years old in most states.</li>
                </ul>
                <div className="centres">Check out some of our centres closer to you</div>
            </div>
            <Footer/>
            </Fragment>
        )
    }
}

export default Donation