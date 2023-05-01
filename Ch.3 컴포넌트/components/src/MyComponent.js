import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Function Component
const MyComponent = (props) => {
    return (
        <div>
            Component Name [ {props.name} ] <br/>
            Component Children [ {props.children} ] <br/>
            Component number [ {props.number} ]
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'React'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired,
}

// // Class Component
// class MyComponent extends Component {
//     static defaultProps = {
//         name: 'React'
//     }

//     static propTypes = {
//         name: PropTypes.string,
//         number: PropTypes.number.isRequired,
//     }

//     render() {
//         const { name, children, number } = this.props;
//         return (
//             <div>
//                 Component Name [ {name} ] <br/>
//                 Component Children [ {children} ] <br/>
//                 Component number [ {number} ]
//             </div>
//         );
//     }
// }

export default MyComponent;