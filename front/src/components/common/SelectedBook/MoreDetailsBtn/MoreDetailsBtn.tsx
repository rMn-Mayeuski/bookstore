import React, { MouseEventHandler } from 'react';

interface IMoreDetailsBtn {
    onClick: MouseEventHandler
}

const MoreDetailsBtn: React.FC<IMoreDetailsBtn> = ({onClick}) => {
    return (
        <button 
        type='button' 
        onClick={onClick}
    >
        More detailse
    </button>
    );
};

export default MoreDetailsBtn;