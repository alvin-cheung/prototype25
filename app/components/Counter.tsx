"use client"

type CounterProps = {
    count: number;
};

export default function Counter({ count }: CounterProps) {

    return (
        <div className="h-32 justify-center text-center self-center m-9 text-xl">
                {count} applications submitted
        </div>
    )
    
}