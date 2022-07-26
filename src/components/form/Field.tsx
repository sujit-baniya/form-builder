import React,{useState, useEffect} from "react";

export const Field = (props) => {
    const [field, setField] = useState('')
    return (
        <div key={props.field._uid}>
            <label htmlFor={props.field._uid}>{props.field.label}</label>
            <input
                type={props.type || props.field.component}
                id={props.field._uid}
                name={props.field._uid}
                value={props.value || ''}
                onChange={(e) => {
                    setField(e.target.value);
                    props.fieldChanged(props.field._uid, e.target.value);
                }}
                />
        </div>
    )
}
