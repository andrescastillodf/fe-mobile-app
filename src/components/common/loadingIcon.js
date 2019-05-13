import React, {PropTypes} from 'react';
import './loadingIcon.css';
const LoadingIcon = () => {
    return (
        <div className="loading-container">
            <div className="lds-hourglass"></div>
        </div>  
    );
};

export default LoadingIcon;