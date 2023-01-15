const SEND_MESSAGE = 'auth/SEND_MESSAGE';

export type SetInitializeSuccessType = ReturnType<typeof setInternationalization>;

export type AppStateType = {
    internationalization: string
}

export type AppActionTypes = SetInitializeSuccessType

let initialState: AppStateType = {
    internationalization: 'eng'
}

export const appReducer = (state: AppStateType = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                internationalization: action.payload.internationalization
            }
        default: {
            return state
        }

    }
}

export const setInternationalization = (value: string) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            internationalization: value
        }
    } as const
}

