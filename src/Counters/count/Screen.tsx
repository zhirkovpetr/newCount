import React from "react";

type screenType = {
    value: number
    count: number
    valueMax: number
    editMode: boolean
    error: boolean
}

export function Screen(props: screenType) {
    return (
        <div>
            {props.error? <span>error</span> : props.editMode ? <span>settings</span> : <span> {props.count}</span>}
        </div>
    )
}