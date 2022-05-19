import React, {useEffect} from "react";

export const URLFetch: React.FC = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json)).catch(e=>{

        });





    }, []);

    return (
        <>
            <h1>33</h1>
        </>
    );
}