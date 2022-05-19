import React, {useEffect, useState} from 'react';
interface MyComponentsProps {
    myProp: number,
    mySecondProp?: string
}

export const MyComponents: React.FC<MyComponentsProps> = (props) => {
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


