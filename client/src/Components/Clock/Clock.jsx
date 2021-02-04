import React from 'react';

let time = new Date().toLocaleString();

const Clock = () => {
    return (
        <div>
           {time} 
        </div>
    );
};

export default Clock;