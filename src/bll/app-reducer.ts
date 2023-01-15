import {Dispatch} from 'react';
import {api} from '../DAL/Api';
import {ContactParamsType} from '../components/Contacts/Form/Form';

const SEND_MESSAGE = 'auth/SEND_MESSAGE';

export type SetInitializeSuccessType = ReturnType<typeof setInitialize>;
// export type GetCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>;
//
export type AppStateType = {
    initialize: string
}

export type AppActionTypes = SetInitializeSuccessType

let initialState: AppStateType = {
    initialize: 'eng'
}

export const appReducer = (state: AppStateType = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                initialize: action.payload.initialize
            }
        default: {
            return state
        }

    }
}

export const setInitialize = (value: string) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            initialize: value
        }
    } as const
}

