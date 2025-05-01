'use client';

import { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ChatBox = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: "Hello! I’m your AI sales coach. How can I help you improve your sales performance today?", sender: "ai" },
    ]);

    const aiResponses = {
        'How do I handle objections?': "Handling objections is key in sales. Listen carefully, empathize, and address the concern by highlighting your product’s benefits.",
        'Give me a cold email template': "Sure! Here’s a simple cold email template: \n\nSubject: Helping [Company Name] Achieve [Goal] \n\nHi [Name], \n\nI hope you're doing well. I'm [Your Name], and I wanted to share a quick idea about how we can help [Company Name] achieve [Goal]. Let's connect to discuss this in more detail.",
        'Closing techniques': "When closing, always assume the sale, ask for a commitment, and be prepared to address last-minute hesitations with confidence.",
        'Negotiation tips': "In negotiations, understand your value, listen more than you speak, and aim for win-win solutions.",
        'AI in sales': "AI in sales can automate lead generation, personalize customer interactions, and analyze data to predict customer behavior, ultimately boosting sales efficiency."
    };

    const handleSendMessage = () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { text: input, sender: "user" }];
        const aiResponse = aiResponses[input] || "I'm not sure about that, but I can help with other topics!";
        newMessages.push({ text: aiResponse, sender: "ai" });

        setMessages(newMessages);
        setInput('');
    };

    return (
        <div className="flex-1 bg-white rounded-xl p-6 text-black relative">
            {/* Display Message */}
            <div className="flex flex-col gap-4 mb-6 max-h-[60vh] overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg ${message.sender === "user" ? 'bg-blue-100 text-black self-end' : 'bg-gray-100 text-black'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>

            {/* Queries */}
            <div className="flex flex-wrap gap-3 mb-6">
                {['How do I handle objections?', 'Give me a cold email template', 'Closing techniques', 'Negotiation tips', 'AI in sales'].map((q, i) => (
                    <button
                        key={i}
                        className="bg-gray-200 px-4 py-2 text-sm rounded-full hover:bg-gray-300 transition-all"
                        onClick={() => {
                            setInput(q);
                            handleSendMessage();
                        }}
                    >
                        {q}
                    </button>
                ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-4 mt-6">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ask anything you need"
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all flex items-center gap-3 cursor-pointer"
                >
                    Send <FaArrowUp />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;