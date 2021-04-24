import React from "react";
import {Box} from "@material-ui/core";

type screenType = {
    value: number
    count: number
    valueMax: number
    editMode: boolean
    error: boolean
}

export function Screen(props: screenType) {
    return (
        <div>
            <Box display="block" displayPrint="none" style={{fontSize: '30px'}}>
                {props.error ? <Box style={{color: 'red'}}> error </Box> : props.editMode ? <Box>settings</Box> :
                    <Box> {props.count}</Box>}
            </Box>
        </div>
    )
}