import React from 'react';
import Button from '@material-ui/core/Button';

const MyButton = () => {
    return (
        <div>
            <Button
            href="https://goo.gl/maps/ZrGTzKz8dJD2"
            variant="contained"
            size="small"
            style={{
                background:'#ffffff',
                color:'black'
            }}
            >
                See on Map
            </Button>
        </div>
    );
};

export default MyButton;