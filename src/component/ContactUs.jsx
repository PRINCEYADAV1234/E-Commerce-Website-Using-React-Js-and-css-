import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();

  if (location.pathname === "/products") return null;

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            placeholder="Your Email"
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="phone"
            placeholder="Your Phone"
            style={{ width: '100%', padding: '10px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea
            placeholder="Your Message"
            rows="4"
            style={{ width: '100%', padding: '10px' }}
            required
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: 'orange', border: 'none', color: 'white', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </div>
  );
}
