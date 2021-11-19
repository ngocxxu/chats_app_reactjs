import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

const App = () =>{
  if(!localStorage.getItem('username')) return <LoginForm/>
  return <ChatEngine
    height = '100vh'
    projectID = '63d554cb-e73d-4397-8d57-9dc71e862a8b'
    userName =  {localStorage.getItem('username')}
    userSecret = {localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
  />
}

export default App;