import React, { Component } from 'react';
import Contactscreen from '../Contactscreen/Contactscreen'
// import Contactdetail from '../Contactdetail/Contactdetail';
import "dotenv/config";

class Home extends Component {

    render() {
        return (
            <div className="container-fluid" >
                <Contactscreen />
            </div>
        );
    }
}

export default Home;