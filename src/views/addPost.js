import React, { useState, useEffect } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddPost = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
  };
    return (
        <>
            <DropzoneArea />
            <TextField
                id="outlined-multiline-static"
                label="Your story"
                placeholder="Write somthing here..."
                multiline
                rows={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
            />
        </>
     );
}
 
export default AddPost;