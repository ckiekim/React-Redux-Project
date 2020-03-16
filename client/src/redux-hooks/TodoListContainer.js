import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import { changeInput, insert, toggleCheck, remove } from './todos';
import TodoList from './TodoList';

const TodoListContainer = () => {
    // todos reducer에서 관리하는 객체를 통째로 가져올거면 state.todos로 간소화시킬 수 있음
    const { input, todos } = useSelector(state => state.todos, []);
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggleCheck, remove], []
    );

    const onChange = useCallback(e => {
        onChangeInput(e.target.value);
    }, [onChangeInput]);
    
    const onSubmit = useCallback(e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }, [input, onChangeInput, onInsert]);

    return (
        <TodoList
            input={input}
            todos={todos}
            onChange={onChange}
            onSubmit={onSubmit}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodoListContainer;