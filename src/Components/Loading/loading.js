import React from 'react';
import { RingLoader } from "react-spinners";
import './loading.css';

function Loading() {
    return (
        <div className='main' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <RingLoader loading={true} size={150} color={"#123abc"} />
        </div>
    )
}

export default Loading
