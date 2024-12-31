"use client"
import { Button } from 'primereact/button';
// import {useState} from "react";

type ChildComponentProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Manual({ count, setCount } 
    : ChildComponentProps
    ) {
    
    const handleKeyDown = () => {
        setCount(count + 1)
    }

    return (
        <Button className="h-32 absolute inset-x-0 bottom-0 justify-center text-center self-center m-9 text-lg" label="Click to apply to jobs" onKeyDown={handleKeyDown} onClick={handleKeyDown}>
            <br></br> <br></br>
        </Button>
    )
}