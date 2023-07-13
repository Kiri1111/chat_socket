import {io} from "socket.io-client";


socket.on('init-messages-published', (messages: any) => {
	setMessages(messages)
})
socket.on('new-message-sent', (message: any) => {
	setMessages((messages) => [...messages, message])
})


export const api = {
	socket: null as any,
	createConnection() {
		this.socket = io("https://samurai-chat-back.herokuapp.com")
	}
}