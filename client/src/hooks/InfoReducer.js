import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state, [action.name]: action.value
    };
}

const InfoReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '', nick: ''
    });
    const {name, nick} = state;
    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input type="text" name="name" value={name} onChange={onChange} />{' '}
                <input type="text" name="nick" value={nick} onChange={onChange} />
            </div>
            <div>
                <p>
                    <b>이름:</b> {name}
                </p>
                <p>
                    <b>닉네임:</b> {nick}
                </p>
            </div>
        </div>
    );
}

export default InfoReducer;