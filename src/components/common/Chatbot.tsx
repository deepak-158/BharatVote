'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  UserIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/LanguageContext'
interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'quick-reply' | 'audio'
}

const quickReplies = [
  { id: 1, text: 'How to register?', action: 'registration_help' },
  { id: 2, text: 'Voting process', action: 'voting_help' },
  { id: 3, text: 'Election dates', action: 'election_dates' },
  { id: 4, text: 'Security features', action: 'security_info' },
  { id: 5, text: 'Technical support', action: 'tech_support' },
  { id: 6, text: 'Language change', action: 'language_help' }
]

const botResponses = {
  greeting: "Namaste! I'm BharatBot, your AI assistant for digital voting. How can I help you today?",
  registration_help: "To register for digital voting:\n1. Visit the registration page\n2. Enter your EPIC (Voter ID) number\n3. Complete Aadhaar verification\n4. Submit required documents\n5. Wait for verification confirmation\n\nWould you like me to guide you through the registration process?",
  voting_help: "The voting process is simple and secure:\n1. Login with your credentials\n2. Complete biometric verification\n3. Review candidates in your constituency\n4. Cast your anonymous vote\n5. Receive blockchain confirmation\n\nEach step is protected by bank-level security!",
  election_dates: "Election dates vary by constituency. Please provide your constituency name or EPIC number, and I'll show you the relevant election schedule.",
  security_info: "Our security features include:\n• AES-256 encryption\n• Blockchain vote storage\n• Multi-factor authentication\n• Biometric verification\n• Anonymous voting tokens\n• Real-time audit trails\n\nYour vote is completely secure and anonymous!",
  tech_support: "For technical support:\n📞 Call: 1800-XXX-HELP (4357)\n📧 Email: support@bharatvote.gov.in\n💬 Chat: Available 24/7\n\nCommon issues I can help with right now:",
  language_help: "BharatVote supports 10+ Indian languages:\n• Hindi (हिन्दी)\n• Bengali (বাংলা)\n• Telugu (తెలుగు)\n• Marathi (मराठी)\n• Tamil (தமிழ்)\n• And more!\n\nYou can change language from the top navigation menu.",
  default: "I understand you need help. Let me connect you with the right information. Please choose from the quick options below or describe your specific question."
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t, currentLanguage } = useLanguage()

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome-' + Date.now(),
        text: botResponses.greeting,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSendMessage = async (text: string, action?: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: 'user-' + Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

    let responseText = botResponses.default
    if (action && action in botResponses) {
      responseText = botResponses[action as keyof typeof botResponses]
    } else {
      // Simple keyword matching for better responses
      const lowerText = text.toLowerCase()
      if (lowerText.includes('register') || lowerText.includes('signup')) {
        responseText = botResponses.registration_help
      } else if (lowerText.includes('vote') || lowerText.includes('voting')) {
        responseText = botResponses.voting_help
      } else if (lowerText.includes('security') || lowerText.includes('safe')) {
        responseText = botResponses.security_info
      } else if (lowerText.includes('language') || lowerText.includes('hindi') || lowerText.includes('tamil')) {
        responseText = botResponses.language_help
      } else if (lowerText.includes('help') || lowerText.includes('support')) {
        responseText = botResponses.tech_support
      } else if (lowerText.includes('date') || lowerText.includes('when') || lowerText.includes('election')) {
        responseText = botResponses.election_dates
      }
    }

    const botMessage: Message = {
      id: 'bot-' + Date.now(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    }

    setIsTyping(false)
    setMessages(prev => [...prev, botMessage])
  }

  const handleQuickReply = (reply: typeof quickReplies[0]) => {
    handleSendMessage(reply.text, reply.action)
  }

  const toggleSpeech = () => {
    if (isSpeaking) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
    } else {
      const lastBotMessage = messages.filter(m => m.sender === 'bot').pop()
      if (lastBotMessage) {
        const utterance = new SpeechSynthesisUtterance(lastBotMessage.text)
        utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-IN'
        utterance.onend = () => setIsSpeaking(false)
        speechSynthesis.speak(utterance)
        setIsSpeaking(true)
      }
    }
  }

  const startListening = () => {
    // Voice recognition would be implemented here
    setIsListening(!isListening)
  }

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full shadow-strong flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8 text-white" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
        )}
      </motion.button>

      {/* Chat interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-strong border border-neutral-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <CpuChipIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">BharatBot</h3>
                    <p className="text-sm text-white/80">AI Voting Assistant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleSpeech}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    {isSpeaking ? (
                      <SpeakerXMarkIcon className="w-5 h-5" />
                    ) : (
                      <SpeakerWaveIcon className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-primary-500' 
                        : 'bg-neutral-200'
                    }`}>
                      {message.sender === 'user' ? (
                        <UserIcon className="w-5 h-5 text-white" />
                      ) : (
                        <CpuChipIcon className="w-5 h-5 text-neutral-600" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-neutral-100 text-neutral-900'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-neutral-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-neutral-200 rounded-lg flex items-center justify-center">
                      <CpuChipIcon className="w-5 h-5 text-neutral-600" />
                    </div>
                    <div className="bg-neutral-100 rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-neutral-100">
                <p className="text-sm text-neutral-600 mb-3">Quick questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.slice(0, 4).map((reply) => (
                    <button
                      key={reply.id}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-3 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-neutral-700 transition-colors duration-200"
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-neutral-100">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Type your question..."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                </div>
                <button
                  onClick={startListening}
                  className={`p-3 rounded-xl transition-colors duration-200 ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                  }`}
                >
                  <MicrophoneIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-300 text-white rounded-xl transition-colors duration-200"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-neutral-500 mt-2 text-center">
                Available in 10+ Indian languages • 24/7 Support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
