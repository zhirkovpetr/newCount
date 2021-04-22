import React from "react";
import {SetInput} from "./SetInput";

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
        <div>
            {props.value >= props.valueMax || props.value < 0 || props.valueMax < 0 ? props.setError(true) : props.setError(false)}
            <SetInput title={'max value: '} value={props.valueMax} update={props.updateValueMax}
                      setEditMode={props.setEditMode} error={props.error}/> <br/>
            <SetInput title={'start value: '} value={props.value} update={props.updateValue}
                      setEditMode={props.setEditMode} error={props.error}/>
        </div>
    )
}