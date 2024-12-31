"use client"

import { JobBoards } from "./FactoryPieces";
import { Recruiters } from "./FactoryPieces";
import { Resumes } from './FactoryPieces';
import { CoverLetters } from './FactoryPieces';

type ChildComponentProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function RightContainer({ count, setCount }: ChildComponentProps) {

    return (
        <div className="absolute inset-y-48 right-0 w-48">
            <div className="relative h-64 w-48 flex flex-col">
                <JobBoards count={count} setCount={setCount} ></JobBoards>
                <Recruiters count={count} setCount={setCount}></Recruiters>
                <Resumes count={count} setCount={setCount}></Resumes>
                <CoverLetters count={count} setCount={setCount}></CoverLetters>
            </div>    
        </div>
    )
}