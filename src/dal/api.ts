import {io} from "socket.io-client";


// socket.on('init-messages-published', (messages: any) => {
// 	setMessages(messages)
// })
// socket.on('new-message-sent', (message: any) => {
// 	setMessages((messages) => [...messages, message])
// })


export const api = {
	socket: null as any,
	createConnection() {
		this.socket = io("https://samurai-chat-back.herokuapp.com")
	},
	subscribe(
		initMessagesHandler: (messages: any) => void,
		newMessageSetHandler: (message: any) => void,
	) {
		this.socket.on('init-messages-published', initMessagesHandler)
		this.socket.on('new-message-sent', newMessageSetHandler)
	},
	destroyConnection() {
		this.socket.disconnect()
		this.socket = null
	},
	sendName(name: string) {
		this.socket.emit('client-name-sent', name)
	},
	sendMessage(message: string) {
		this.socket.emit('client-message-sent', message)
	}


}