import {Dispatch} from "react";

const initialState = {
	messages: []
}

export const chatReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case 'MESSAGES_RECEIVED' : {
			return {...state, messages: action.messages}
		}
		case 'NEW_MESSAGE_RECEIVED' : {
			return {...state, messages: [...state.messages, action.message]}
		}

	}

}

export const messagesReceived = (messages: any) => ({type: 'MESSAGES_RECEIVED', messages})
export const newMessageReceived = (message: any) => ({type: 'NEW_MESSAGE_RECEIVED', message})


export const createConnection = () => (dispatch: any) => {

}
export const destroyConnection = () => (dispatch: any) => {

}