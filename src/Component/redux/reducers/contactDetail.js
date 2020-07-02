const initialState = {
    contactDetail: []
}

const contactDetail = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACTDETAIL_PENDING':
            return {
                ...state
            }
        case 'GET_CONTACTDETAIL_REJECTED':
            return {
                ...state
            }
        case 'GET_CONTACTDETAIL_FULFILLED':
            return {
                ...state,
                contactDetail: action.payload.data.result
            }

        default:
            return state;
    }
}

export default contactDetail