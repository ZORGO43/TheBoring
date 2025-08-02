import React, { useState } from 'react';
import axios from 'axios';
import "./chat.css";

function Chat() {
    const [username, setUsername] = useState("");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const[startChat, setStartChat] = useState(false);

    const ChatBOT = async () => {
        if (!input.trim()) return; // Prevent sending empty messages

        // Add user message to state
        setMessages([...messages, { sender: "user", text: input }]);
        setInput(""); // Clear input after sending

        try {
            const response = await axios.post("https://thinkapi.zorgo.xyz/chat", {
                userName: username,
                userInput: input,
            });

    
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: response.data.response },
            ]);

        
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: "Error: Unable to fetch response." },
            ]);
        }
    };

    return (
        <>
            {startChat ? (

                <div className="h-screen flex flex-col justify-between items-center">
                    <div className="w-10/12 h-full overflow-y-auto overflow-x-hidden p-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`py-2 px-3 rounded-lg max-w-xs ${message.sender === "user"
                                            ? "bg-blue-500 text-white text-right"
                                            : "bg-gray-300 text-black text-left"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center w-full md:px-32 px-5 mt-5">
                        <div
                            className="flex items-center p-4 rounded-full h-14 w-full justify-center"
                            style={{ backgroundColor: "#2f2f2f", marginBottom: "16px" }}
                        >
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-grow bg-transparent h-14 rounded-full w-10/12 py-2 px-4 border border-transparent focus:border-black transition duration-200"
                                style={{ borderColor: "#2f2f2f" }}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && ChatBOT()}
                            />
                            <button
                                onClick={ChatBOT}
                                className="ml-4 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-200"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (

                <div className="h-screen flex flex-col justify-center space-y-5 items-center space-x-5">
                    <h1 className='text-xl'>Please enter your name to start the chat.</h1>
                    <div className='space-x-8'>
                        <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}
                            className=' bg-transparent min-w-32 p-3 rounded-2xl border border-white focus:border-white transition duration-200'
                        />

                        <button onClick={()=>setStartChat(true)}>Enter</button>
                    </div>

                </div>
            )}

        </>
    );
}

export default Chat;
