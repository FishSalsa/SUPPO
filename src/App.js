import './App.css';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f5f7fb', margin: 0 }}>
      <header
        style={{
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '80px 0 60px 0',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: 0, fontWeight: 700, letterSpacing: '1px' }}>
          Welcome to Suppo
        </h1>
        <p style={{ fontSize: '1.5rem', marginTop: '20px', fontWeight: 400, lineHeight: 1.4 }}>
          Build faster. Succeed smarter. <br />Powering the next generation of your business.
        </p>
        <button
          style={{
            marginTop: '40px',
            fontSize: '1.25rem',
            padding: '16px 40px',
            backgroundColor: '#fff',
            color: '#2563eb',
            border: 'none',
            borderRadius: '30px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
            transition: 'background 0.2s, color 0.2s',
          }}
          onClick={() => alert('Get Started!')}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
