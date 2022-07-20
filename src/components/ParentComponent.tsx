import React from "react"
import { ChildComponent } from "./ChildComponent"
export const ParentComponent = () => {
    const nameList = ["Sujit", "Anita", "Alishma", "Sanvi"]
    const ClickHandler = (childName: string) => {
        alert(`Clicked! ${childName}`)
    }
    return (
        <div>
            {
                nameList.map((name) => {
                    return (
                        <h2 key={name}>{name}</h2>
                    )
                })
            }
            <ChildComponent clickHandler={ClickHandler}/>
        </div>
    )
}