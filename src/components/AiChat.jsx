import { useEffect, useRef, useState } from 'react'
import { botResponses } from '../data/aiContent.js'

const initialMessages = [
  { id: 'welcome', author: 'bot', text: 'Olá! Sou a JOVI AI. Como posso ajudar com sua foto?' },
]

function readMessages() {
  try {
    const stored = JSON.parse(localStorage.getItem('jovi.chatMessages'))
    return Array.isArray(stored) && stored.length ? stored : initialMessages
  } catch {
    return initialMessages
  }
}

export default function AiChat() {
  const [messages, setMessages] = useState(readMessages)
  const [input, setInput] = useState('')
  const timeoutRef = useRef(null)
  const messagesRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('jovi.chatMessages', JSON.stringify(messages))
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  function sendMessage() {
    const text = input.trim()
    if (!text) return

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), author: 'user', text },
    ])
    setInput('')

    const responseIndex = Math.floor(Math.random() * botResponses.length)
    const responseDelay = 800 + Math.floor(Math.random() * 700)

    timeoutRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: crypto.randomUUID(), author: 'bot', text: botResponses[responseIndex] },
      ])
    }, responseDelay)
  }

  return (
    <div className="ai-chat-view ai-view-visible">
      <div className="ai-messages" ref={messagesRef}>
        {messages.map((message) => (
          <div
            className={`ai-msg ${message.author === 'user' ? 'ai-msg-user' : 'ai-msg-bot'}`}
            key={message.id}
          >
            <div className="ai-avatar">{message.author === 'user' ? 'EU' : 'AI'}</div>
            <div className="ai-bubble">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="ai-input-area">
        <input
          className="ai-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              sendMessage()
            }
          }}
          placeholder="Pergunte à IA..."
        />
        <button className="ai-send-btn" aria-label="Enviar mensagem" onClick={sendMessage}>
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </div>
  )
}
