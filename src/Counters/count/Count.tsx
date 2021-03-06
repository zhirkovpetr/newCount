import React from "react";
import {Screen} from "./Screen";
import {CountButtons} from "./CountButtons";
import {Grid} from "@material-ui/core";

type CountType = {
    addInc: () => void
    reset: () => void
    minValue: number
    maxValue: number
    editMode: boolean
    count: number
    error: boolean
}

export const Count = (props: CountType) => {
    return (
        <Grid>
            <Grid style={{textAlign: 'center'}}>
                <Screen count={props.count} maxValue={props.maxValue} editMode={props.editMode}
                        error={props.error} />
            </Grid>
            <Grid style={{marginTop: '5px'}}>
                <CountButtons addInc={props.addInc} reset={props.reset} minValue={props.minValue} maxValue={props.maxValue}
                              editMode={props.editMode}
                              count={props.count}/>
            </Grid>
        </Grid>
    )
}