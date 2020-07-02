import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux'
import { readContact, searchContact } from '../redux/actions/contact'
// import { readContactDetail } from '../redux/actions/contactDetail'
import Cwcjourney from '../CwcJouner/Cwcjourney';
import Contactdetail from '../Contactdetail/Contactdetail'
import '../Contactdetail/style.css'

class Contactscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            color: '',
            handleClose: '',
            search: '',
            handleShow: false
        };
    }

    onEdit = (event) => {
        this.setState = ({
            id: event.target.value
        })
    }

    onreadDetail = async () => {
        this.setState = ({})
    }

    onreadContact = async () => {
        await this.props.dispatch(readContact())
    }

    onsearchContact = async (e) => {
        this.setState({
            search: e.target.value
        })
        await this.props.dispatch(searchContact(e.target.value))
    }

    async componentDidUpdate() {
        await this.onreadContact();
    }

    async componentDidMount() {
        await this.onreadContact();
    }

    onhandleClose = () => {
        this.setState({
            handleClose: false
        })
    }

    onhandleShow = (id) => {
        this.setState({
            id: id,
            handleShow: true
        })
    }

    render() {
        const { contact } = this.props
        return (
            <div className="row">
                <div className="col-lg-3 p-0" style={{ border: '2px solid #E7E9EA', height: '100vh' }}>
                    <div className="p-4 pencil" style={{ borderBottom: '2px solid #E7E9EA' }}>
                        <SearchIcon style={{ transform: 'scale(1.5)', color: '#E7E9EA' }} />
                        <input onChange={this.onsearchContact} className="ml-3" style={{ border: 'none', }} placeholder="Search for customer" />
                    </div>
                    {contact.map((item, index) =>
                        <button key={index} onClick={() => this.onhandleShow(item.id)} style={{ backgroundColor: 'transparent', border: 'none', padding: '0px', width: '340px' }}>
                            <div className="d-flex flex-row pl-4 pr-4 pt-2 pb-2">
                                {item.id % 2 === 0 ? (
                                    <AccountCircleIcon style={{ fontSize: '60px', color: '#6263B5' }} />
                                ) : item.id % 2 === 1 ? (
                                    <AccountCircleIcon style={{ fontSize: '60px', color: '#E69169' }} />
                                ) : (
                                            <AccountCircleIcon style={{ fontSize: '60px', color: 'red' }} />
                                        )}
                                <div className="d-flex flex-column mt-2 ml-2">
                                    <span className="text-left">{item.name}</span>
                                    <small className="text-left">{item.hp}</small>
                                </div>
                            </div>
                        </button>
                    )}
                </div>
                <div className="col-lg-3 p-0" style={{ border: '2px solid #E7E9EA', height: '100vh' }}>


                    <Contactdetail show={this.state.handleShow} onHide={this.onhandleShow} id={this.state.id} />
                </div>


                <div className="col-lg-6 p-0" style={{ border: '2px solid #E7E9EA', height: '100vh' }}>
                    <Cwcjourney />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, "ini state")
    return {
        contact: state.contact.contact,
        contactDetail: state.contactDetail.contactDetail
    }
}

export default connect(mapStateToProps)(Contactscreen);