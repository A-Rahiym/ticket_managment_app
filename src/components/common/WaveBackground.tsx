export function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-[80px] md:h-[120px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(280, 90%, 60%)', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: 'hsl(190, 90%, 50%)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(330, 85%, 60%)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1200,64 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
        />
        <path
          d="M0,80 C320,40 640,40 960,80 C1120,100 1200,100 1200,80 L1200,120 L0,120 Z"
          fill="hsl(250, 100%, 98%)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
