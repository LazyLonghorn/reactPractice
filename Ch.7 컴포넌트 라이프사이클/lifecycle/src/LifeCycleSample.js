import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');

        if(nextProps.color !== prevState.color) {
            return { color : nextProps.color };
        }
        return null;	// state 변경 X
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate : ', nextProps, nextState);

        /**
         * 끝자리가 4 인경우 render X
         * 다만, state 는 계속 증가하고 있어서 다시 누르면 그 다음 숫자로 rendering 된다.
         */

        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate : ', prevProps, prevState);

        if(snapshot) {
            console.log('Update Before : ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    { this.state.number }
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default LifeCycleSample;