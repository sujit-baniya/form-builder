import React from "react"
export const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} is {props.role}</h1>
            {props.children}
        </div>
    )
}