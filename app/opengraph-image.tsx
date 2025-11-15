import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Zipper Demo - Isomorphic ZIP File Downloads';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1e293b 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            borderRadius: '24px',
            border: '2px solid #3b82f6',
          }}
        >
          {/* ZIP Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '160px',
              height: '160px',
              backgroundColor: '#3b82f6',
              borderRadius: '20px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '80px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              ZIP
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Zipper Demo
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: 'flex',
              fontSize: '32px',
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: '900px',
            }}
          >
            Isomorphic ZIP file downloads for browser & Node.js
          </div>

          {/* Package name */}
          <div
            style={{
              display: 'flex',
              marginTop: '40px',
              padding: '16px 32px',
              backgroundColor: '#1e293b',
              borderRadius: '12px',
              fontSize: '28px',
              color: '#60a5fa',
              fontFamily: 'monospace',
            }}
          >
            @diegoaltoworks/zipper
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
