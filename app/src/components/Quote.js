import React, { useEffect } from 'react';
import { getQuote, fetchFail } from '../actions';
import { connect } from 'react-redux'

const Quote = (props) => {
    const quote = props.quote;
    const isFetching = props.isFetching;
    const error = props.error;

    useEffect(() => {
        props.getQuote();
    }, []);

    const handleClick = ()=> {
        props.getQuote();
      }

    if (error) {
        return <h2>We got an error: {error}</h2>
    }
    if (isFetching) {
        return (
        <>
            <h2>Loading...</h2>
        </>
        )
    }

    return (
        <div>
            <div>
                <h4> Yeezy Wisdom:</h4>
                <button onClick={handleClick}>Generate Wisdom</button>
                <p>{quote}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(mapStateToProps, {getQuote, fetchFail})(Quote);