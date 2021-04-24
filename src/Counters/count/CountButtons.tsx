import {ButtonClick} from "../ButtonClick";
import React from "react";
import {Grid} from "@material-ui/core";

type CountButtonsType = {
    addInc: () => void
    reset: () => void
    value: number
    valueMax: number
    editMode: boolean
    count: number
}

export const CountButtons = (props: CountButtonsType) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs>
            <ButtonClick onClick={props.addInc} title='inc' value={props.value} valueMax={props.valueMax}
                         editMode={props.editMode} count={props.count}/>
            </Grid>
                <Grid item xs>
            <ButtonClick onClick={props.reset} title='reset' value={props.value} valueMax={props.valueMax}
                         editMode={props.editMode} count={props.count}/>
                </Grid>
        </Grid>
    )
}