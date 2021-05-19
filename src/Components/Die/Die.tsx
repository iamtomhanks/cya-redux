import React from 'react';
import './Die.css';

interface Props {
  curPosition: number;
  onClick: () => void;
};

const Die = ({ curPosition, onClick }: Props) => {
    const renderFace = () => {
        switch (curPosition) {
            case 1: 
                return (
                    <div className="dice first-face">
                        <span className="dot"/>
                    </div>
                );
            case 2: 
                return (
                    <div className="dice second-face">
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                );
            case 3: 
                return (
                    <div className="dice third-face">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                );
            case 4: 
                return (
                    <div className="fourth-face dice">
                        <div className="column">
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                        <div className="column">
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                    </div>
                );
            case 5: 
                return (
                    <div className="fifth-face dice">
                        <div className="column">
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                        
                        <div className="column">
                            <span className="dot" />
                        </div>
                        
                        <div className="column">
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                    </div>
                );
            case 6: 
                return (
                    <div className="sixth-face dice">
                        <div className="column">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                        <div className="column">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                        </div>
                    </div>
                );
                
            default:
                return null;
        }
    };

    return (
        <div className={`die-${curPosition}`} onClick={onClick}>
            {renderFace()}
        </div>
    );
}; 

export {
    Die,
};
