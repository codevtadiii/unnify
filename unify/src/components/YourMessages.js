import React, { useState } from 'react';
import './styles/YourMessages.css';


const Messages = () => {
    // State to hold the list of messages
    const [messages, setMessages] = useState([
        { sender: "John", content: "Hello, how are you?" },
        { sender: "Jane", content: "I am good, thanks for asking!" }
    ]);

    // State to manage new message input
    const [newMessage, setNewMessage] = useState({
        sender: '',
        content: ''
    });

    // State to manage the visibility of the message form and messages list
    const [showForm, setShowForm] = useState(false);
    const [showMessages, setShowMessages] = useState(true);

    // Handle form input changes
    const handleInputChange = (e) => {
        setNewMessage({
            ...newMessage,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newMessage.sender && newMessage.content) {
            // Add the new message to the messages list
            setMessages([...messages, newMessage]);

            // Reset form inputs
            setNewMessage({ sender: '', content: '' });

            // Hide the form after submission
            setShowForm(false);
        }
    };

    return (
        <div className="messages-page">
            <h2>Messages</h2>

            
            <div className="message-actions">
                <button onClick={() => setShowForm(!showForm)} className="toggle-form-btn">
                    {showForm ? 'Cancel' : 'Add Message'}
                </button>

                <button onClick={() => setShowMessages(!showMessages)} className="toggle-view-btn">
                    {showMessages ? 'Hide Messages' : 'View Messages'}
                </button>
            </div>

            
            {showMessages && (
                <div className="message-list">
                    {messages.map((message, index) => (
                        <div key={index} className="message-item">
                            <h4>From: {message.sender}</h4>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
            )}

            
            {showForm && (
                <form className="message-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="sender"
                        value={newMessage.sender}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                    />
                    <textarea
                        name="content"
                        value={newMessage.content}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="submit-message-btn">Send Message</button>
                </form>
            )}
        </div>
    );
};

export default Messages;
