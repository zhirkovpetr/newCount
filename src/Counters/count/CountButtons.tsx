import {Button} from "../Button";
import React from "react";

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
        <div>
            <Button onClick={props.addInc} title='inc' value={props.value} valueMax={props.valueMax}
                    editMode={props.editMode} count={props.count}/>
            <Button onClick={props.reset} title='reset' value={props.value} valueMax={props.valueMax}
                    editMode={props.editMode} count={props.count}/>
        </div>
    )
}