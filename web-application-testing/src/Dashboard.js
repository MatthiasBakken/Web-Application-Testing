import React, { useContext } from 'react';
import { DashboardContext } from './DashboardContext';

export const DashBoard = () => {

    const {strike, ball, foul, hit, incrementHit, incrementBall, incrementFoul, incrementStrike} = useContext(DashboardContext);

    return(
        <div>
            <button style={{width: '100px', height: '50px'}} onClick={incrementStrike} >{`Strike`}</button>
            <button style={{width: '100px', height: '50px'}} onClick={incrementBall} >{`Ball`}</button>
            <button style={{width: '100px', height: '50px'}} onClick={incrementFoul} >{`Foul`}</button>
            <button style={{width: '100px', height: '50px'}} onClick={incrementHit} >{`Hit`}</button>
        </div>
    )
}

export default DashBoard;