import React, { useContext } from 'react';
import { DashboardContext } from './DashboardContext';

export const Display = () => {

    const {strike, ball, foul, hit } = useContext(DashboardContext);

    return(
        <div>
            <p>{`Strike: ${strike}`}</p>
            <p>{`Ball: ${ball}`}</p>
            <p>{`Foul: ${foul}`}</p>
            <p>{`Hit: ${hit}`}</p>
        </div>
    )
}

export default Display;