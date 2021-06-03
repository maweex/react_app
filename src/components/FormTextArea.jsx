import React from 'react';
import FormLine from './FormLine';


function FormTextArea(props) {
    return (
        <FormLine label={props.label}>
            <textarea
                label="Descripción"
                placeholder="Cuentanos sobre ti..."
                textarea className="fullWidth bigger"
                rows="5"
                required>

            </textarea>
        </FormLine>
    );
}

export default FormTextArea;