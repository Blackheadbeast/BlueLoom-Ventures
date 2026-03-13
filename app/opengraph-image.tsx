import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BlueLoom Ventures — IT Consulting for Small Business';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Top — logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              background: 'rgba(255,255,255,0.25)',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                background: 'white',
                borderRadius: '6px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                color: 'white',
                fontSize: '22px',
                fontWeight: '700',
                letterSpacing: '-0.3px',
              }}
            >
              BlueLoom Ventures
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}
            >
              IT Consulting
            </span>
          </div>
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '68px',
              fontWeight: '800',
              lineHeight: '1.05',
              margin: 0,
              letterSpacing: '-1.5px',
              maxWidth: '900px',
            }}
          >
            Your tech should work
            <br />
            for your business.
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '26px',
              lineHeight: '1.45',
              margin: 0,
              maxWidth: '760px',
              fontWeight: '400',
            }}
          >
            IT consulting for small businesses — security, automation, and
            system cleanup without the big invoices.
          </p>
        </div>

        {/* Bottom — CTA pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              background: 'white',
              color: '#0F766E',
              fontSize: '18px',
              fontWeight: '700',
              padding: '14px 28px',
              borderRadius: '50px',
            }}
          >
            Book a Free IT Assessment
          </div>
          <div
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '16px',
            }}
          >
            No contracts. No obligation.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
