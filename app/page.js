export default function Dashboard() {
  const clients = [
    { name: 'Sunset Bakery', niche: 'Local Bakery' },
    { name: 'FitLife Studio', niche: 'Fitness Coach' },
    { name: 'Bloom Florals', niche: 'Flower Shop' },
  ];

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
            + Add Client
          </button>
        </div>

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
