import React from 'react';

const Facility = ({facilities}) => {
    const {name, details} = facilities;

    return (
        <div className="card bg-base-200 shadow-xl py-3 border-t-orange-600 border-2">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Facility;