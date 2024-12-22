"use client";
import { Button } from "primereact/button";
import React, { useState, useEffect } from "react";

type FactoryComponentProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

export function createComponent({
    name,
    initialCost,
    incrementRate,
    threshold,
    timerRate,
}: {
    name: string;
    initialCost: number;
    incrementRate: number;
    threshold: number;
    timerRate: (quantity: number) => number;
}) {
    return function DynamicComponent({ count, setCount }: FactoryComponentProps) {
        const [quantity, setQuantity] = useState(0);
        const [cost, setCost] = useState(initialCost);
        const [isUnlocked, setIsUnlocked] = useState(false);

        // Toggle component permanently when count exceeds threshold
        useEffect(() => {
            if (count > threshold && !isUnlocked) {
                setIsUnlocked(true);
            }
        }, [count, isUnlocked]);

        // Timer for incrementing count
        useEffect(() => {
            const tick = setInterval(() => {
                if (quantity > 0) setCount(count + 1);
            }, timerRate(quantity));
            
            return () => clearInterval(tick);
        }, [quantity, count, setCount, timerRate]);
        
        // Increment function
        const increment = () => {
            if (count >= cost) {
                setQuantity(quantity + 1);
                setCount(count - cost);
                setCost(Math.round(cost * incrementRate));
            }
        };
        
        //  Don't render anything if still locked
        if (!isUnlocked) return null;

        return (
            <button onClick={increment}>
                {name}: {quantity}
                Focus cost: {cost}
            </button>
        );
    };
}
