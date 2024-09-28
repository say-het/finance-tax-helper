import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatPanel = () => {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('en-US');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = language;

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setInput(transcript);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      console.error('SpeechRecognition API not supported in this browser.');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en-US' ? 'hi-IN' : 'en-US'));
  };

  const handleStart = () => {
    if (recognition && !isListening) {
      try {
        recognition.lang = language;
        recognition.start();
        setIsListening(true);

        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(stream => {
            setMediaStream(stream);
          })
          .catch(err => {
            console.error('Failed to access microphone:', err);
          });
      } catch (err) {
        console.error('Error starting speech recognition:', err);
      }
    }
  };

  const handleStop = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
      handleSendMessage(input);

      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        setMediaStream(null);
      }
    }
  };

  const handleSendMessage = async (message) => {
    if (message.trim() === '') return;

    setChatLog((prevLog) => [...prevLog, { sender: 'user', message }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/ask', { message });

      if (response.status === 200) {
        const { newdata } = response.data;
        setChatLog((prevLog) => [...prevLog, { sender: 'TaxBot', message: newdata }]);
      } else {
        console.error('Error fetching the API');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white p-4 shadow-lg">
      <h2 className="text-lg font-bold text-black mb-2">TaxBot</h2>
      <div className="flex-1 overflow-y-auto p-4 border border-blue-500 rounded-lg bg-white">
        <div className="flex flex-col space-y-2">
          {chatLog.map((entry, index) => (
            <div key={index} className="mb-2">
              <p className={entry.sender === 'user' ? 'text-right text-blue-500' : 'text-left text-blue-500'}>
                <strong>{entry.sender}:</strong> {entry.message}
              </p>
            </div>
          ))}
          {isLoading && (
            <span className="loading loading-dots loading-lg text-blue-500"></span>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={isListening ? handleStop : handleStart}
            className={`py-2 px-4 ${isListening ? 'bg-blue-500' : 'bg-white'} text-black rounded-full shadow-md transition duration-150`}
          >
            {isListening ? 'Stop' : 'Speak'}
          </button>
          <input 
            type="checkbox" 
            className="toggle toggle-success" 
            defaultChecked 
            onClick={toggleLanguage}
          />
          <span className="text-blue-500">Toggle Language (Current: {language})</span>
        </div>
        <div className="flex mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage(input);
            }}
            className="input input-bordered w-full flex-1 border-blue-500 bg-white text-black"
            placeholder="Type a message..."
          />
          <button
            onClick={() => handleSendMessage(input)}
            className="py-2 px-4 ml-2 bg-blue-500 text-white rounded-full shadow-md transition duration-150"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
