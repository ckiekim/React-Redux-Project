import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNick = e => {
        setNick(e.target.value);
    }
    /* useEffect(() => {
        console.log('렌더링 될 때마다 실행');
        console.log(name, nick);  
    }); */
    /* useEffect(() => {
        console.log('마운트 될 때만 실행');
        //console.log(name, nick);  
    }, []); */
    useEffect(() => {
        console.log('name값이 변경될 때만 실행');
        console.log(name, nick);  
    }, [name]);
    // unmount 전이나 update 되기 직전에 어떤 작업을 수행하고자 할 때
    /* useEffect(() => {
        console.log('effect name:', name);
        return () => {
            console.log('cleanup');
            console.log(name);  
        };
    }); */
    return (
        <div>
            <div>
                <input type="text" value={name} onChange={onChangeName} />{' '}
                <input type="text" value={nick} onChange={onChangeNick} />
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

export default Info;