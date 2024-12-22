"use client"
import { Button } from 'primereact/button';
// import {useState} from "react";

type ChildComponentProps = {
    count: number;
    setCount: Function;
};

export default function Manual({ count, setCount } 
    :ChildComponentProps
    ) {
    
    const handleKeyDown = () => {
        setCount(count + 1)
    }

    return (
        <Button label="Click to apply to jobs" onKeyDown={handleKeyDown} onClick={handleKeyDown}>
            <br></br> <br></br>
        </Button>
    )
}