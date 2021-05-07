import React from "react";
import {SetInput} from "./SetInput";
import {Grid} from "@material-ui/core";

type InputsType = {
    minValue: number
    maxValue: number
    updateValueMin: (minValue: number) => void
    updateValueMax: (valueMax: number) => void
    setEditMode: (EditMode: boolean) => void
    error: boolean
    setError: (error: boolean) => void
}

export function Inputs(props: InputsType) {
    return (
        <Grid>
            {props.minValue >= props.maxValue || props.minValue < 0 || props.maxValue < 0 ? props.setError(true) : props.setError(false)}
            <Grid style={{margin: '30px'}}>
            <SetInput label={'Max value'} value={props.maxValue} update={props.updateValueMax}
                      setEditMode={props.setEditMode} error={props.error}/> <br/>
            </Grid>
                <Grid style={{margin: '30px'}}>
            <SetInput label={'Start value'} value={props.minValue} update={props.updateValueMin}
                      setEditMode={props.setEditMode} error={props.error}/>
                </Grid>
        </Grid>
    )
}