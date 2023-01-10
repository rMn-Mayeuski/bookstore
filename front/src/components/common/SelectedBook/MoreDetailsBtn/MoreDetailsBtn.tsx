import React from 'react';

interface IMoreDetailsBtn {
    onClick: any
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