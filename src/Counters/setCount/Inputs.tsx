import React from "react";
import {SetInput} from "./SetInput";
import {Grid} from "@material-ui/core";

type InputsType = {
    value: number
    valueMax: number
    updateValue: (value: number) => void
    updateValueMax: (valueMax: number) => void
    setEditMode: (EditMode: boolean) => void
    error: boolean
    setError: (error: boolean) => void
}

export function Inputs(props: InputsType) {
    return (
        <Grid>
            {props.value >= props.valueMax || props.value < 0 || props.valueMax < 0 ? props.setError(true) : props.setError(false)}
            <Grid style={{margin: '30px'}}>
            <SetInput label={'Max value'} value={props.valueMax} update={props.updateValueMax}
                      setEditMode={props.setEditMode} error={props.error}/> <br/>
            </Grid>
                <Grid style={{margin: '30px'}}>
            <SetInput label={'Start value'} value={props.value} update={props.updateValue}
                      setEditMode={props.setEditMode} error={props.error}/>
                </Grid>
        </Grid>
    )
}