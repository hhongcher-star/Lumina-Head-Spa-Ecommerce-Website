import { ArrowUp, MessageCircle, Paperclip, Send, Smile, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    const nextMessage = message.trim();
    if (!nextMessage) return;
    setMessages((current) => [...current, nextMessage]);
    setMessage('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-actions">
      {chatOpen && (
        <section className="chat-panel" aria-label="Chat with Lumina">
          <header className="chat-panel__header">
            <div>
              <h2>Let's Chat!</h2>
              <p><span /> We'll reply as soon as we can</p>
            </div>
            <button type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}><X /></button>
          </header>
          <div className="chat-panel__conversation" aria-live="polite">
            {messages.length === 0 ? (
              <div className="chat-panel__welcome">
                <MessageCircle size={25} />
                <p>Welcome to Lumina.</p>
                <span>How can we help with your visit?</span>
              </div>
            ) : messages.map((item, index) => <p className="chat-panel__message" key={`${item}-${index}`}>{item}</p>)}
          </div>
          <form className="chat-panel__composer" onSubmit={sendMessage}>
            <textarea
              aria-label="Write your message"
              placeholder="Write your message..."
              rows="1"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) sendMessage(event);
              }}
            />
            <div className="chat-panel__tools">
              <button type="button" aria-label="Add emoji"><Smile /></button>
              <label aria-label="Attach a file">
                <Paperclip />
                <input type="file" />
              </label>
              <button className="chat-panel__send" type="submit" aria-label="Send message" disabled={!message.trim()}><Send /></button>
            </div>
          </form>
        </section>
      )}

      <button className="back-to-top" type="button" aria-label="Back to top" onClick={scrollToTop}>
        <ArrowUp />
      </button>
      <button
        className={`chat-toggle${chatOpen ? ' chat-toggle--open' : ''}`}
        type="button"
        aria-expanded={chatOpen}
        onClick={() => setChatOpen((current) => !current)}
      >
        <MessageCircle />
        <span>{chatOpen ? 'Close Chat' : "Let's Chat!"}</span>
      </button>
    </div>
  );
}
