import React from 'react';
import {CircularProgress} from "@material-ui/core";
import './styles.scss'
const Loader = () => {
    return (
        <div className={'loading-container'}>
            <CircularProgress size={100} color="primary" />
        </div>
    );
};

export default Loader;