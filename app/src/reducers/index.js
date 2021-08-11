import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions'

const initialState = {
    person: {
        name: {
            title: '',
            first: '',
            last: ''
        },
        picture: {
            large: '',
            medium: '',
            thumbnail: ''
        }
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case(FETCH_FAIL):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        default:
            return state;
    }
};