'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [clients, setClients] = useState([
    { name: 'Sunset Bakery', niche: 'Local Bakery' },
    { name: 'FitLife Studio', niche: 'Fitness Coach' },
    { name: 'Bloom Florals', niche: 'Flower Shop' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newNiche, setNewNiche] = useState('');

  function handleAddClient() {
    if (newName.trim() === '') return;
    setClients([...clients, { name: newName, niche: newNiche || 'General' }]);
    setNewName('');
    setNewNiche('');
    setShowForm(false);
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0F0F14',
        color: '#FFFFFF',
        fontFamily: 'system-ui, sans-serif',
        padding: '40px 24px',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <h1 style={{ fontSize: '1.8rem', margin: 0 }}>
            🚀 ContentPilot AI
          </h1>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              backgroundColor: '#6366F1',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 18px',
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            {showForm ? 'Cancel' : '+ Add Client'}
          </button>
        </div>

        {showForm && (
          <div
            style={{
              backgroundColor: '#1A1A22',
              border: '1px solid #2A2A35',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <input
              type="text"
              placeholder="Client name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '6px',
                border: '1px solid #2A2A35',
                backgroundColor: '#0F0F14',
                color: '#FFFFFF',
                boxSizing: 'border-box',
              }}
            />
            <input
              type="text"
              placeholder="Niche (e.g. Coffee Shop)"
              value={newNiche}
              onChange={(e) => setNewNiche(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '14px',
                borderRadius: '6px',
                border: '1px solid #2A2A35',
                backgroundColor: '#0F0F14',
                color: '#FFFFFF',
                boxSizing: 'border-box',
              }}
            />
            <button
              onClick={handleAddClient}
              style={{
                backgroundColor: '#6366F1',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 18px',
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              Save Client
            </button>
          </div>
        )}

        <h2
          style={{
            fontSize: '1rem',
            color: '#A0A0B0',
            marginBottom: '16px',
            fontWeight: 'normal',
          }}
        >
          Your Clients
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {clients.map((client, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#1A1A22',
                border: '1px solid #2A2A35',
                borderRadius: '10px',
                padding: '18px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                  {client.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#A0A0B0' }}>
                  {client.niche}
                </div>
              </div>
              <span style={{ color: '#6366F1', fontSize: '0.9rem' }}>
                View →
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
