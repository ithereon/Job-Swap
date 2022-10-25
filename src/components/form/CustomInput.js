import * as React from 'react';
import '../../styles/components/form/customInputField.scss'

export default function CustomizedInput({size = 'medium', label = 'Label'}) {
    return (
        <div class="form-group" className={ size == 'small'? 'custom-input-small' : 'custom-input-field' }>
            <label for="exampleInputEmail1">{label}</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your text" />
        </div>
    );
}
