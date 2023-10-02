// import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';

// class HistorySample extends Component {
//     handleGoBack = () => {
//         this.props.history.goBack();
//     }

//     handleGoHome = () => {
//         this.props.history.push('/');
//     }

//     componentDidMount() {
//         debugger
//         let history = useNavigate();
//         this.unblock = this.props.history.block('Exit?');
//     }

//     componentWillUnmount() {
//         if(this.unblock) {
//             this.unblock();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleGoBack}>Back</button>
//                 <button onClick={this.handleGoHome}>Home</button>
//             </div>
//         );
//     }
// }

// export default HistorySample;

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HistorySample = () => {
    const nav = useNavigate();

    const handleGoBack = useCallback(e => {
        nav(-1);
    }, [nav]);

    const handleGoHome = useCallback(e => {
        nav('/');
    }, [nav]);

    return (
        <div>
            <button onClick={handleGoBack}>Back</button>
            <button onClick={handleGoHome}>Home</button>
        </div>
    );
};

export default HistorySample;