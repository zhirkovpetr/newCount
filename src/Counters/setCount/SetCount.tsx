import {Inputs} from "./Inputs";
import {Button} from "../Button";
import React from "react";

type SetCountType = {
    setItemValue: () => void
    value: number
    valueMax: number
    updateValue: (value: number) => void
    updateValueMax: (valueMax: number) => void
    setEditMode: (editMode: boolean) => void
    setCount?: (count: number) => void
    error: boolean
    setError: (error: boolean) => void
}

export const SetCount = (props: SetCountType) => {
    return (
        <div>
            <Inputs value={props.value} valueMax={props.valueMax} updateValue={props.updateValue}
                    updateValueMax={props.updateValueMax}
                    setEditMode={props.setEditMode} error={props.error} setError={props.setError}/>
            <Button onClick={props.setItemValue} title={'set'} value={props.value} valueMax={props.valueMax}
                    setEditMode={props.setEditMode} setCount={props.setCount} error={props.error}/>
        </div>
    )
}