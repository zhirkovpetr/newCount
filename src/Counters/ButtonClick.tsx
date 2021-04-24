import React from "react";
import {Button, Grid} from "@material-ui/core";

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

export function ButtonClick(props: ButtonType) {
    const onClick = () => {
        props.onClick();
        props.setEditMode && props.setEditMode(false);
        if (props.setCount && props.value) {
            props.setCount(props.value)
        }
    }
    return (
        <Grid
            container
            direction="row-reverse"
            justify="center"
            alignItems="flex-start"
        >
            <Button onClick={onClick} size={'small'} color={'primary'} variant={'contained'}
                    disabled={props.valueMax === props.value || props.editMode || props.error}>{props.title}</Button>
        </Grid>
    )
}