const initialState = {
    contact: [],
    contactupdate: []
}

const contact = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACT_PENDING':
            return {
                ...state
            }
        case 'GET_CONTACT_REJECTED':
            return {
                ...state
            }

        case 'GET_CONTACT_FULFILLED':
            return {
                ...state,
                contact: action.payload.data.result
            }

        case 'GET_SEARCHCONTACT_PENDING':
            return {
                ...state
            }
        case 'GET_SEARCHCONTACT_REJECTED':
            return {
                ...state
            }

        case 'GET_SEARCHCONTACT_FULFILLED':
            return {
                ...state,
                contact: action.payload.data.result
            }

        case 'UPDATE_CONTACT_PENDING':
            return {
                ...state
            }
        case 'UPDATE_CONTACT_REJECTED':
            return {
                ...state
            }

        case 'UPDATE_CONTACT_FULFILLED':
            return {
                ...state,
                contactupdate: action.payload.data.result
            }

        default:
            return state;
    }
}

export default contact