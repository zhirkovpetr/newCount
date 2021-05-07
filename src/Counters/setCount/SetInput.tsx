import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type SetInputType = {
    value: number
    update: (minValue: number) => void
    setEditMode: (EditMode: boolean) => void
    error: boolean
    label: string
}

export function SetInput(props: SetInputType) {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let number = Number(e.currentTarget.value)
        props.update(number)
        props.setEditMode(true)
    }


    return (
        <span>
            <TextField
                variant={'outlined'}
                type={'number'}
                label={props.label}
                value={props.value}
                onChange={onChange}
                error={props.error}
                helperText={ props.error ? 'Incorrect value entered!' : ''}
            />
    </span>


    )
}