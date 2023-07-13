import React, {useEffect, useState} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./bll/store";
import {createConnection, destroyConnection} from "./bll/chatReducer";


function App() {

	const messages = useAppSelector(store => store.chat)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(createConnection())
		return () => {
			dispatch(destroyConnection())
		}
	}, [])

	// const [messages, setMessages] = useState<any[]>([])
	const [message, setMessage] = useState('')
	const [name, setName] = useState('Ker9')

	return (
		<div className="App">
			<div style={{marginBottom: '40px', border: '1px solid black', width: '400px', height: '500px'}}>
				{messages.map((el: any) => {
					return <div key={el.id}>
						<b>{el.user.name}:</b>
						{el.message}
						<hr/>
					</div>
				})}
			</div>
			<input value={name} onChange={(e) => {
				setName(e.currentTarget.value)
			}}/>
			<button style={{marginBottom: '40px'}} onClick={() => {
				socket.emit('client-name-sent', name)
			}}>send name
			</button>
			<textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
			<button onClick={() => {
				socket.emit('client-message-sent', message)
			}}>send message
			</button>
		</div>
	);
}

export default App;
