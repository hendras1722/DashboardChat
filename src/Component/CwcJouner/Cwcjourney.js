import React, { Component } from 'react';
import chart from '../../assets/img/chart.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Cwcjourney extends Component {

    render() {
        return (
            <div>
                <div className="p-3" style={{ borderBottom: '2px solid #E7E9EA' }}>
                    <div className="p-3">
                        <div className="d-flex flex-row">
                            <h5>CWC Journey</h5>
                            <div className="form-group ml-auto">
                                <select className="form-control" id="exampleFormControlSelect1" style={{ width: '100%' }}>
                                    <option>Januari</option>
                                    <option>Februari</option>
                                    <option>Maret</option>
                                    <option>April</option>
                                    <option>Mei</option>
                                    <option>Juni</option>
                                    <option>Juli</option>
                                    <option>Agustus</option>
                                    <option>September</option>
                                    <option>Oktober</option>
                                    <option>November</option>
                                    <option>Desember</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-3">
                            <img src={chart} alt="chart" />
                        </div>
                    </div>
                </div>
                <div className="p-3 pt-4">
                    <h5>Tickets Journey</h5>
                    <div style={{ backgroundColor: '#F1FAF6' }}>
                        <div className="d-flex flex-row pr-3 pl-3 pt-2">
                            <AccountCircleIcon style={{ fontSize: '40px' }} />
                            <div className="mt-2 ml-3">
                                <small>191200000354 - Irham Hafizh</small>
                            </div>
                            <div className="ml-auto mt-2 p-0 text-center" style={{ backgroundColor: '#6697F5', borderRadius: '6px', width: '75px', height: '27px' }}>
                                <small className="text-white text-center" style={{ fontSize: '12px' }}>On Progress</small>
                            </div>
                        </div>
                        <div className="d-flex flex-row pl-3 pr-3">
                            <small>Kartu Hilang</small>
                            <div className="ml-auto text-right p-0">
                                <small>30 November 2019 <br /> <span>10:10:09</span></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cwcjourney;  