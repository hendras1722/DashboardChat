import React, { Component } from 'react';
import { readContactDetail } from '../redux/actions/contactDetail'
import { updateContact } from '../redux/actions/contact'
import { connect } from 'react-redux'
import '../Contactdetail/style.css'
import CreateIcon from '@material-ui/icons/Create';

class onContactdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            company: '',
            hp: '',
            email: '',
            facebook: '',
            twitter: '',
            telegram: '',
            instagram: '',
            update: false
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const id = this.props.id
        let data = {
            name: this.state.name,
            address: this.state.address,
            company: this.state.company,
            hp: this.state.hp,
            email: this.state.email,
            facebook: this.state.facebook,
            twitter: this.state.twitter,
            telegram: this.state.telegram,
            instagram: this.state.instagram,
        }

        await this.props.dispatch(updateContact(id, data))
    }

    onreadContactDetail = async () => {
        await this.props.dispatch(readContactDetail(this.props.id))
    }

    onupdated = () => {
        this.setState({
            update: true
        })
    }

    offupdated = () => {
        this.setState({
            update: false
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async UNSAFE_componentWillUpdate() {
        await this.onreadContactDetail();
    }

    render() {
        const { show, contactDetail = [] } = this.props;
        return (
            <div className="container" style={{ display: show ? "block" : "none" }} id="exampleModalLong">
                <div className="text-right pt-4">
                    <button onClick={() => this.onupdated(this.state.update)} style={{ border: 'none', background: 'transparent' }}>
                        <CreateIcon style={{ fontSize: '20px', color: '#B9BEC2' }} />
                    </button>
                </div>

                {this.state.update === true ? (
                    <div >
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="mt-4">
                                        <label>Username</label>
                                    </div>

                                    <div className="mt-4">
                                        <label>Address</label>
                                    </div>

                                    <div className="mt-3">
                                        <label>Company</label>
                                    </div>

                                    <div className="mt-4">
                                        <label>hp</label>
                                    </div>

                                    <div className="mt-4">
                                        <label>email</label>
                                    </div>


                                    <div className="mt-4">
                                        <label>facebook</label>
                                    </div>


                                    <div className="mt-3">
                                        <label>twitter</label>
                                    </div>


                                    <div className="mt-4">
                                        <label>telegram</label>
                                    </div>

                                    <div className="mt-4">
                                        <label>instagram</label>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div key={index} className="mt-3">
                                            <input defaultValue={item.name} type="text" className='form-control border-rounded ' name="name" onChange={this.onChange} />
                                        </div>
                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div key={index} className="mt-3">
                                            <input defaultValue={item.address} type="text" className='form-control border-rounded ' name="address" onChange={this.onChange} />
                                        </div>
                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div key={index} className="mt-3">
                                            <input defaultValue={item.company} type="text" className='form-control border-rounded ' name="company" onChange={this.onChange} />
                                        </div>
                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div className="mt-3" key={index}>
                                            <input type="text" defaultValue={item.hp} className='form-control border-rounded ' name="hp" onChange={this.onChange} />
                                        </div>
                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div className="mt-3" key={index}>
                                            <input type="text" defaultValue={item.email} className='form-control border-rounded ' name="email" onChange={this.onChange} />
                                        </div>

                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div className="mt-3" key={index}>
                                            <input type="text" defaultValue={item.facebook} className='form-control border-rounded ' name="facebook" onChange={this.onChange} />
                                        </div>
                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div className="mt-3" key={index}>
                                            <input type="text" defaultValue={item.twitter} className='form-control border-rounded ' name="twitter" onChange={this.onChange} />
                                        </div>
                                    )}
                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div className="mt-3" key={index}>
                                            <input type="text" defaultValue={item.telegram} className='form-control border-rounded ' name="telegram" onChange={this.onChange} />
                                        </div>
                                    )}

                                    {this.props.contactDetail && contactDetail.map((item, index) =>
                                        <div className="mt-3" key={index}>
                                            <input type="text" defaultValue={item.instagram} className='form-control border-rounded ' name="instagram" onChange={this.onChange} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button className="btn save1 btn-success">Save</button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center align-items-center ">
                            <button className="btn save1 btn-danger" onClick={() => this.offupdated(this.state.update)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                        <div>
                            <div className="d-flex flex-column justify-content-center align-items-center pt-2 profile">
                                {this.props.contactDetail && this.props.contactDetail.map((item, index) =>
                                    <h3 style={{ fontSize: "18px" }} key={index}>{item.name}</h3>
                                )}
                                <div className="d-flex flex-row mt-2">
                                    <button className="btn em btn-success">Email</button>
                                    <button className="btn em btn-success ml-2">SMS</button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <small>Customer Info</small>
                                <table className="table mt-1 table-striped">
                                    {this.props.contactDetail && this.props.contactDetail.map((item, index) =>
                                        <tbody key={index}>
                                            <tr >
                                                <td>Address</td>
                                                <td>{item.address}</td>
                                            </tr>
                                            <tr >
                                                <td>Company</td>
                                                <td>{item.company}</td>
                                            </tr>
                                            <tr >
                                                <td>Hp</td>
                                                <td>{item.hp}</td>
                                            </tr>
                                            <tr >
                                                <td>Email</td>
                                                <td>{item.email}</td>
                                            </tr>
                                            <tr >
                                                <td>Facebook</td>
                                                <td>{item.facebook}</td>
                                            </tr>
                                            <tr >
                                                <td>Twitter</td>
                                                <td>{item.twitter}</td>
                                            </tr>
                                            <tr >
                                                <td>Telegram</td>
                                                <td>{item.telegram}</td>
                                            </tr>
                                            <tr >
                                                <td>Instagram</td>
                                                <td>{item.instagram}</td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                            <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                                <div className='flex-column d-flex justify-content-center align-items-center p-3'>
                                    <h2>3</h2>
                                    <small>Total CWC</small>
                                </div>
                                <div style={{ backgroundColor: 'black', height: '40px', width: "1.5px", marginTop: "-20px" }}>
                                </div>
                                <div className='flex-column d-flex justify-content-center align-items-center p-3'>
                                    <h2>5</h2>
                                    <small>Total CWC</small>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        contactDetail: state.contactDetail.contactDetail
    }
}

export default connect(mapStatetoProps)(onContactdetail);