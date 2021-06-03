import React from 'react';
import FormLine from './FormLine';


function FormOutput(props) {
    return (
        <FormLine
            label={props.label}>
            <output
                className="fullWidth bigger">
                {props.value}
            </output>
        </FormLine>



    );

}

export default FormOutput;