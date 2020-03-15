import React from 'react';
import useInputs from './useInputs';

const InfoUseInputs = () => {
    const [state, onChange] = useInputs({
        name: '', nick: ''
    });
    const { name, nick } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />{' '}
                <input name="nick" value={nick} onChange={onChange} />
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

export default InfoUseInputs;