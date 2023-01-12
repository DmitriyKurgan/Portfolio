import {Dispatch} from 'react';
import {api} from '../DAL/Api';
import {ContactParamsType} from '../components/Contacts/Form/Form';
const SEND_MESSAGE = 'auth/SEND_MESSAGE';

export type SendMessageType = ReturnType<typeof sendMessage>;
// export type GetCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>;
//
export type AuthType = {
    isSuccess: boolean
}

export type AuthActionTypes = SendMessageType

let initialState: AuthType = {
    isSuccess:false
}

export const authReducer = (state: AuthType = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                isSuccess:action.payload.isSuccess
            }
        default: {
            return state
        }

    }
}

export const sendMessage = () => {
    return {
        type: SEND_MESSAGE,
        payload: {
            isSuccess: true
        }
    } as const
}

//thunkCreator для отправки письма с приглашением на работу (письмо на почту)
export const contactMe = (formDara:ContactParamsType): any => async (dispatch:Dispatch<any>) => {
    let data = await api.contactMe(formDara);
    dispatch(sendMessage);
}
