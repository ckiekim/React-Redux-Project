import React from 'react';
import { useSelector } from 'react-redux';
import CounterComponent from './CounterComponent';
import { increment, decrement } from './counter';
import useActions from './useActions';

const CounterContainer = () => {
    const counter = useSelector(state => state.counter, []);
    const [onIncrease, onDecrease] = useActions([increment, decrement], []);
    return (
        <CounterComponent number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};

export default CounterContainer;