import axios from 'axios'

export const getQuote = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://api.kanye.rest/')
            .then(res=>{
                console.log("RIGHT HERE:",res.data)
                dispatch(fetchSuccess(res.data.quote));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });
    }
}


export const FETCH_START = "FETCH_START";
export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (quote)=> {
    return({type: FETCH_SUCCESS, payload: quote});
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error});
}