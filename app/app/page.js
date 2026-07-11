
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F0F14',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
        🚀 ContentPilot AI
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#A0A0B0' }}>
        It's alive! Your app is live on the internet.
      </p>
    </main>
  );
}
