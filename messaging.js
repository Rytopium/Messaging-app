// src/components/Messaging.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseconfig';

function Messaging() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').onSnapshot((snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    try {
      await firestore.collection('messages').add({
        sender: 'User A',
        message: newMessage,
        timestamp: new Date()
      });
      setNewMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Messaging</h2>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <p>{msg.sender}: {msg.message}</p>
          </div>
        ))}
      </div>
      <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Messaging;
