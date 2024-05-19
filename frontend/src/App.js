import logo from './logo.svg';
import React,{useState, useEffect} from 'react';
import './App.css';

function App() {

  // add random client id by date time
  const [clientID, setclienID] = useState(Math.floor(new Date().getTime()/1000));

  const [chatHistory, setchatHistory] = useState([]);

  
  useEffect(() => {
    const url = "ws"

    return () => {
      second
    }

  }, [third])

  return (
    <div className="container">
      <h1>Chat</h1>
      <h2>your client id: </h2>
      <div className = "chat-container">
        <div classname = "chat">
          <div className="my-message">
            <p className="client">client id: </p>
            <p className="message">Hello</p>
          </div>

          <div className="another-message">
            <p className="client">client id: </p>
            <p className="message">Hey!</p>
          </div>
        
        </div>
        <div clasName = "input-chat-container">
          <input className = "input-chat" type = "text" placeholder = "Chat Message ..."/>
          <button className = "submit-chat">Send</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
