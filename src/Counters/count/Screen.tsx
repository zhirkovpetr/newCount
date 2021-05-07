import React from "react";
import {Box} from "@material-ui/core";

type screenType = {
    count: number
    maxValue: number
    editMode: boolean
    error: boolean
}

export function Screen(props: screenType) {
    return (
        <div>
            <Box display="block" displayPrint="none" style={{fontSize: '30px'}}>
                {props.error ? <Box style={{color: 'red'}}> error </Box> : props.editMode ? <Box>settings</Box> :
                    props.count === props.maxValue? <Box style={{color: 'red'}}> {props.count}</Box> :
                            <Box>{props.count}</Box>}

            </Box>
        </div>
    )
}