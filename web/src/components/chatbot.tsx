"use client";
import { getRandomElement } from "@/scripts/utils";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown'


interface Message {
  id: number;
  role: 'user' | 'model';
  parts: string[];
  timestamp: Date;
}

interface ChatbotUIProps {
  className?: string;
}

const WORKER_URL = "https://chatbot-api.syntria-cognition.workers.dev/";
async function getNextMessage(conversationHistory: Message[]): Promise<string> {
  try {
    const response = await fetch(WORKER_URL + "chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: conversationHistory }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data: { reply: string } = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Failed to fetch reply from server:", error);
    return "Sorry, something went wrong while fetching the response.";
  }
}

const ChatbotUI: React.FC<ChatbotUIProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      parts: ["Hello! I'm here to help you learn more about Skylar's Run. How can I assist you today?"],
      role: 'model',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasNotification, setHasNotification] = useState<boolean>(true);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addMessage = (text: string, role: 'user' | 'model'): Message[] => {
    const newMessage: Message = {
      id: Date.now(),
      parts: [text],
      role,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    return [...messages, newMessage];
  };

  const handleSendMessage = async (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: string = inputValue.trim();

    // Add user message
    const newMessages = addMessage(userMessage, 'user');

    // Clear input immediately
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Get bot response (non-blocking)
    try {
      // Remove first message, because it's not necessary and Google Gemini complains
      const botResponse: string = await getNextMessage(newMessages.slice(1));
      addMessage(botResponse, 'model');
    } catch (error) {
      addMessage(
        "Sorry, I'm having trouble responding right now. Please try again!",
        'model',
      );
    } finally {
      setIsTyping(false);
    }
  };

  const toggleChat = (): void => {
    // If they're about to open the chat, then set notifications to false
    if (!isOpen) setHasNotification(false);
    setIsOpen(!isOpen);
  };

  const toggleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSendMessage(e);
    }
  };

  return (
    <div className={`fixed ${isExpanded ? 'inset-4' : 'bottom-6 right-6'} z-50 ${className}`}>
      {/* Chat Dialog */}
      {isOpen && (
        <div className={`mb-4 ${isExpanded ? 'w-full h-full' : 'w-80 h-96'} bg-white rounded-2xl shadow-2xl border-2 border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-2 duration-300`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-white text-sm">
                  Syntria Assistant
                </h3>
                <p className="text-white/80 text-xs font-light">Online now</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Expand/Contract Button */}
              <button
                onClick={toggleExpanded}
                className="cursor-pointer text-white hover:text-gray-200 transition-colors"
                type="button"
                aria-label={isExpanded ? "Contract chat" : "Expand chat"}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isExpanded ? (
                    <>
                      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/>
                      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/>
                      <path d="M15 4.2V9m0 0h4.8M15 9l6-6"/>
                      <path d="M9 4.2V9m0 0H4.2M9 9 3 3"/>
                    </>
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  )}
                </svg>
                
              </button>
              {/* Close Button */}
              <button
                onClick={toggleChat}
                className="cursor-pointer text-white hover:text-gray-200 transition-colors"
                type="button"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message: Message) => (
              <div
                key={message.id}
                className={`flex ${message.role == 'model' ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`${isExpanded ? 'max-w-2xl' : 'max-w-xs'} ${message.role == 'model' ? "order-2" : "order-1"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm font-light ${
                      message.role == 'model'
                        ? "bg-white text-gray-800 rounded-bl-sm shadow-sm border"
                        : "bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500/80 text-white rounded-br-sm shadow-md"
                    }`}
                  >
                    {message.parts.map((message, idx) => (
                      <div key={"Chatbot Message " + idx} className="font-light">
                        <ReactMarkdown>{message}</ReactMarkdown>
                      </div>
                    ))}
                  </div>
                  <p
                    className={`text-xs text-gray-500 mt-1 font-light ${message.role == 'model' ? "text-left" : "text-right"}`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
                {message.role == 'model' && (
                  <div className="order-1 mr-2 mt-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="mr-2 mt-1">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-white text-gray-800 px-3 py-2 rounded-2xl rounded-bl-sm shadow-sm border">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                onKeyPress={handleKeyPress}
                placeholder={getRandomElement([
                  "Ask about Syntria's mission...",
                  "Learn about Skylar's Run...",
                  "Get started today...",
                ])}
                className="flex-1 text-dtext px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm font-light"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
                aria-label="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Open Button - Only show when not expanded */}
      {!isOpen && !isExpanded && (
        <button
          onClick={toggleChat}
          className="w-14 h-14 cursor-pointer rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 hover:shadow-purple-400/25"
          type="button"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <div className="relative">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            {/* Notification dot */}
            {hasNotification && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatbotUI;