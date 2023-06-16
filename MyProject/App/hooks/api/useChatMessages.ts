import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../../App';

export type WebSocketMessage = {
  sender: string;
  content: string;
};

type WebSocketCallback = (message: WebSocketMessage) => void;

const useChatMessages = (url: string, onMessage: WebSocketCallback): ((message: WebSocketMessage) => void) => {

  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);
    socketRef.current.addEventListener('open', () => {
      console.log('WebSocket connection established');
    });

    socketRef.current.addEventListener('message', (event) => {
      const message: WebSocketMessage = JSON.parse(event.data);
      console.log('message', message)
      onMessage(message);
    });

    socketRef.current.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });
    

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url, onMessage]);

  const sendMessage = (message: WebSocketMessage) => {
    if (socketRef.current) {
      console.log('sendMessage', JSON.stringify(message))
      socketRef.current.send(JSON.stringify(message));
    }
  };

  return sendMessage;
};

export default useChatMessages;