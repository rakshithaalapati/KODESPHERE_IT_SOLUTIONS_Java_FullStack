// src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/contact', form)
      .then(() => setStatus('Message sent successfully!'))
      .catch(() => setStatus('Failed to send message.'));
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '50px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '10px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: '10px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          style={{ padding: '10px', minHeight: '100px' }}
        />
        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Send</button>
      </form>
      {status && <p style={{ marginTop: '15px', color: 'green' }}>{status}</p>}
    </div>
  );
};

export default Contact;