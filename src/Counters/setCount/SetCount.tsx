import {Inputs} from "./Inputs";
import {ButtonClick} from "../ButtonClick";
import React from "react";
import {Grid} from "@material-ui/core";


type SetCountType = {
    minValue: number
    maxValue: number
    updateValueMin: (value: number) => void
    updateValueMax: (valueMax: number) => void
    setEditMode: (editMode: boolean) => void
    count: number
    error: boolean
    setError: (error: boolean) => void
    updateCount: (count: number) => void


}

export const SetCount = (props: SetCountType) => {

    const onClickHandler = () => {
        if (props.updateCount) {
            props.updateCount(props.count)
        }
    }

    return (
        <Grid>
            <Grid>
                <Inputs minValue={props.minValue} maxValue={props.maxValue} updateValueMin={props.updateValueMin}
                        updateValueMax={props.updateValueMax}
                        setEditMode={props.setEditMode} error={props.error} setError={props.setError}/>
            </Grid>
            <Grid style={{marginTop: '10px'}}>

                <ButtonClick title={'set'} minValue={props.minValue} maxValue={props.maxValue} onClick={onClickHandler}
                             setEditMode={props.setEditMode} count={props.count} error={props.error}
                             updateCount={props.updateCount}/>
            </Grid>
        </Grid>
    )
}