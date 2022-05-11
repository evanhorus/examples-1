import React, {useEffect, useState} from 'react';
// 0, 1, 2, 3, 4,
const a = [1, 2];

console.log("A[0]", a[0]);
console.log("A[1]", a[1]);


const [first, second] = [1, 2];

console.log("A[0] === first", first);
console.log("A[1] === second", second);


export const MyComponents: React.FC<{ myProp: number, mySecondProp?: string }> = (props) => {
    const [myNumber, setMyNumber] = useState('42');

    useEffect(() => {
        console.log('MOUNT');
    }, []);

    useEffect(() => {
        console.log('CHANGE');
    }, [myNumber, props.myProp]);

    return (
        <>
            <h1>{props.myProp}</h1>
            <h1>{myNumber}</h1>
            <input value={myNumber} onChange={(e) => {
                setMyNumber(e.currentTarget.value)
            }}/>
            <div onClick={() => {
                console.log("HEEEEEEE")
            }}>
                HELLOOOOOO

            </div>
        </>
    );
}

export const MyComponent2: React.FC = (props) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);

    return (
        <>
            <h1>33</h1>
        </>
    );
}
