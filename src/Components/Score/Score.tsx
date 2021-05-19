import React from 'react';
import './Score.css';

interface Props {
};

const Score = ({ }: Props) => {
    return (
        <div className="score">
            <h2>Your total score is: 0</h2>
        </div>
    );
}; 

export {
    Score,
};
