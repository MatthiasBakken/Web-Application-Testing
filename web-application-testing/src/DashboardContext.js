import React, { createContext, useState } from 'react';

export const DashboardContext = createContext({
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0
});

export const DashboardProvider = ({children}) => {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);

    const incrementStrike = () => {
        const strikeCount = strike + 1;
        setStrike(strikeCount);
        if (strike + 1 > 2) {
            setTimeout(() => {
                setStrike(0);
                setBall(0);
                setFoul(0);
                setHit(0);
            }, 500);
        }
    };

    const incrementBall = () => {
        const ballCount = ball + 1;
        setBall(ballCount);
        if (ball + 1 > 3) {
            setTimeout(() => {
                setStrike(0);
                setBall(0);
                setFoul(0);
                setHit(0);
            }, 500);
        }
    };

    const incrementFoul = () => {
        const foulCount = foul + 1;
        if (strike !== 2) {
            setStrike(strike + 1)
        };
        setFoul(foulCount);
    };

    const incrementHit = () => {
        const hitCount = hit + 1;
        setHit(hit + 1);
        if (hitCount) {
            setTimeout(() => {
                setStrike(0);
                setBall(0);
                setFoul(0);
                setHit(0);
            }, 500);
        }
    }

    return (
        <DashboardContext.Provider 
            value={{
                strike,
                ball,
                foul,
                hit,
                incrementStrike,
                incrementBall,
                incrementFoul,
                incrementHit
            }}
        >
            {children}
        </DashboardContext.Provider>
    )
}