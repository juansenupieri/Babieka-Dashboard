import React from 'react';

function PageHeading(props) {
    return (
        <div className="d-sm-flex align-items-center justify-content-center mb-4">
            <h1 className="h3 mb-0 text-gray-800">{props.title}</h1>
        </div>
    );
}

export default PageHeading;