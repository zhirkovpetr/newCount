import React, {useEffect, useState} from 'react';
import './App.css';
import {SetCount} from "./Counters/setCount/SetCount";
import {Count} from "./Counters/count/Count";
import {Grid} from "@material-ui/core";


function App() {

    let [value, setValue] = useState<number>(0);
    let [valueMax, setValueMax] = useState<number>(0);
    let [editMode, setEditMode] = useState<boolean>(false)
    let [error, setError] = useState<boolean>(false);


    const setItemValue = () => {
        localStorage.setItem('value', JSON.stringify(value))
        localStorage.setItem('valueMax', JSON.stringify(valueMax))
    }

    useEffect(() => {
            let valueAsString = localStorage.getItem('value')
            if (valueAsString) {
                let newValue = JSON.parse(valueAsString)
                setValue(newValue)
            }
        }
        , [])

    useEffect(() => {
            let valueAsString = localStorage.getItem('valueMax')
            if (valueAsString) {
                let newValue = JSON.parse(valueAsString)
                setValueMax(newValue)
            }
        }
        , [])

    const updateValue = (value: number) => {
        setValue(value)
    }

    const updateValueMax = (valueMax: number) => {
        setValueMax(valueMax)
    }

    let [count, setCount] = useState<number>(value)

    useEffect(() => {//timer
        let countString = localStorage.getItem("Count")
        if (countString) {
            let countNumber = JSON.parse(countString)
            setCount(countNumber)
        }
    }, [])

    useEffect(() => {//timer
        localStorage.setItem("Count", JSON.stringify(value));
    }, [value])


    const addInc = () => {
        let res = count + 1
        if (res <= valueMax) {
            setCount(res)
        }
    }

    const reset = () => {
        setCount(value);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}
                      style={{margin: '20px auto', border: '1px solid #3f51b5', width: '230px', height: '300px'}}>
                        <SetCount value={value} valueMax={valueMax} updateValue={updateValue}
                                  updateValueMax={updateValueMax}
                                  error={error} setError={setError} setCount={setCount} setItemValue={setItemValue}
                                  setEditMode={setEditMode}/>
                </Grid>
                <Grid container justify="center" spacing={2}
                      style={{margin: '20px auto', border: '1px solid #3f51b5', width: '230px', height: '100px'}}>
                        <Count addInc={addInc} reset={reset} value={value} valueMax={valueMax} editMode={editMode}
                               count={count} error={error}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
