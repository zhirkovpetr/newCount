import {ButtonClick} from "../ButtonClick";
import React from "react";
import {Grid} from "@material-ui/core";

type CountButtonsType = {
    addInc: () => void
    reset: () => void
    minValue: number
    maxValue: number
    editMode: boolean
    count: number
}

export const CountButtons = (props: CountButtonsType) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs>
            <ButtonClick onClick={props.addInc} title='inc' minValue={props.minValue} maxValue={props.maxValue}
                         editMode={props.editMode} count={props.count} disabled={props.maxValue === props.count}
                         />
            </Grid>
                <Grid item xs>
            <ButtonClick onClick={props.reset} title='reset' minValue={props.minValue} maxValue={props.maxValue}
                         editMode={props.editMode} count={props.count} disabled={props.minValue === props.count}
                         />
                </Grid>
        </Grid>
    )
}