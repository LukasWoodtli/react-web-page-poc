import React from 'react';
import {useParams} from 'react-router-dom';


function DummyPage() {
    const params: any = useParams();

    return (
        <>
            <h1>Hello</h1>
            <p>{params.content}</p>
        </>);
}

export default DummyPage;
