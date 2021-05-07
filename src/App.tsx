import React, {useState} from 'react';
import './App.css';
import {SetCount} from "./Counters/setCount/SetCount";
import {Count} from "./Counters/count/Count";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {addCountAC, setMinValueAC, setMaxValueAC} from "./BLL/counter-reducer";


function App() {

    /*let [value, setValue] = useState<number>(0);
    let [valueMax, setValueMax] = useState<number>(0);*/


    let [editMode, setEditMode] = useState<boolean>(false)
    let [error, setError] = useState<boolean>(false);

    const dispatch = useDispatch()
    let count = useSelector<AppStateType, number>(
        state => state.counter.count)
    let maxValue = useSelector<AppStateType, number>(
        state => state.counter.maxValue)
    let minValue = useSelector<AppStateType, number>(
        state => state.counter.minValue)

    /*const setItemValue = () => {
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
*/
    const updateValueMin = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
    }

    const updateValueMax = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }

    const updateCount = (count: number) => {
        dispatch(addCountAC(count))
    }

    /*let [count, setCount] = useState<number>(value)

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

*/


    const addInc = () => {
        let action = addCountAC( count+1)
        dispatch(action)
        /*let res = count + 1
        if (res <= valueMax) {
            setCount(res)
        }*/

    }

    const reset = () => {
        let action = setMinValueAC(minValue)
        dispatch(action)
        /*setCount(value);*/
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}
                      style={{margin: '20px auto', border: '1px solid #3f51b5', width: '230px', height: '300px'}}>
                        <SetCount minValue={minValue} maxValue={maxValue} updateValueMin={updateValueMin}
                                  updateValueMax={updateValueMax}
                                  error={error} setError={setError} count={count}
                                  setEditMode={setEditMode} updateCount={updateCount}/>
                </Grid>
                <Grid container justify="center" spacing={2}
                      style={{margin: '20px auto', border: '1px solid #3f51b5', width: '230px', height: '100px'}}>
                    <Count addInc={addInc} reset={reset} minValue={minValue} maxValue={maxValue} editMode={editMode}
                               count={count} error={error} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
