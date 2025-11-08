import { ImageResponse } from 'next/og'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #faf9f8 0%, #f0f0f0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1a1816',
          fontFamily: 'Geist Sans',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 300, marginBottom: 16 }}>
          faruk kandemir
        </div>
        <div style={{ fontSize: 32, fontWeight: 300, opacity: 0.8 }}>
          full stack developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
