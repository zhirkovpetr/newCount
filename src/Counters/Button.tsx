import React from "react";

type ButtonType = {
    onClick: () => void
    title: string
    value: number
    valueMax: number
    editMode?: boolean
    setEditMode?: (editMode: boolean) => void
    count?: number
    setCount?: (count: number) => void
    error?: boolean
}

export function Button(props: ButtonType) {
    const onClick = () => {
        props.onClick();
        props.setEditMode && props.setEditMode(false);
        if (props.setCount && props.value) {
            props.setCount(props.value)
        }
    }
    return (
        <div>
            <button onClick={onClick}
                    disabled={props.valueMax === props.value || props.editMode || props.error}>{props.title}</button>
        </div>
    )
}