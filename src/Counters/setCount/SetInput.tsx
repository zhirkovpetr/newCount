import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type SetInputType = {
    title: string
    value: number
    update: (value: number) => void
    setEditMode: (EditMode: boolean) => void
    error: boolean
}

export function SetInput(props: SetInputType) {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let number = Number(e.currentTarget.value)
        props.update(number)
        props.setEditMode(true)
    }


    return (
        <span>
             {props.title}
            <TextField
                variant={'outlined'}
                type={'number'}
                value={props.value}
                onChange={onChange}
                error={props.error}
                helperText={'Incorrect value entered!'}
            />
    </span>


    )
}