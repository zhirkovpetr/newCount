import React from "react";
import {Button, Grid} from "@material-ui/core";

type ButtonType = {
    onClick: () => void
    title: string
    minValue: number
    maxValue: number
    editMode?: boolean
    setEditMode?: (editMode: boolean) => void
    count: number
    error?: boolean
    disabled?: boolean
    updateCount?:(count: number)=> void
}

export function ButtonClick(props: ButtonType) {
    const onClick = () => {
        props.onClick();
        props.setEditMode && props.setEditMode(false);
        if (props.updateCount && props.minValue) {
            props.updateCount(props.minValue)
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
                disabled={props.disabled || props.maxValue === props.minValue || props.editMode || props.error}>{props.title}</Button>
        </Grid>
    )
}