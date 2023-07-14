import {api} from "../dal/api";

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
	api.createConnection()
	api.subscribe((messages: any) => {
			dispatch(messagesReceived(messages))
		},
		(message: any) => {
			dispatch(newMessageReceived(message))
		},
	)
}
export const destroyConnection = () => (dispatch: any) => {
	api.destroyConnection()
}

export const setClientName = (name: string) => (dispatch: any) => {
	api.sendName(name)
}
export const setClientMessage = (message: string) => (dispatch: any) => {
	api.sendMessage(message)
}