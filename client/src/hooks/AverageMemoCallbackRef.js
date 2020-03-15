import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중...');
    if (numbers.length === 0)
        return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const AverageMemoCallback = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);     // 처음 렌더링 될 때만 함수 생성
    const onInsert = useCallback(
        e => {
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputEl.current.focus();
        }, 
        [number, list]
    );  // number 또는 list가 변경되었을 때만 함수 생성
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <p>
                <b>Average: </b>{avg}
            </p>
        </div>
    );
};

export default AverageMemoCallback;