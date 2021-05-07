const ADD_COUNT_TO_COUNTER = "ADD_COUNT_TO_COUNTER";
const SET_MIN_VALUE = "SET_MIN_VALUE";
const SET_MAX_VALUE = "SET_MAX_VALUE";

export const addCountAC = (count: number) => {
    return {
        type: ADD_COUNT_TO_COUNTER,
        count: count
    } as const
}

export const setMinValueAC = (minValue: number) => {
    return {
        type: SET_MIN_VALUE,
        minValue: minValue
    } as const
}

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: SET_MAX_VALUE,
        maxValue: maxValue
    } as const
}


type addCountActionType = ReturnType<typeof addCountAC>
type setMinValueActionType = ReturnType<typeof setMinValueAC>
type setMaxValueActionType = ReturnType<typeof setMaxValueAC>

export type ActionsTypes = addCountActionType | setMinValueActionType | setMaxValueActionType


const initialState = {
    count: 0,
    minValue: 0,
    maxValue: 100
}

type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_COUNT_TO_COUNTER:
            return {
                ...state,
                count: action.count

            }
        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: action.minValue
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
        default:
            return state
    }
}