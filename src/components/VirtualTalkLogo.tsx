const VirtualTalkLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Speech bubble */}
    <path
      d="M8 12C8 8.68629 10.6863 6 14 6H30C33.3137 6 36 8.68629 36 12V24C36 27.3137 33.3137 30 30 30H20L12 38V30H14C10.6863 30 8 27.3137 8 24V12Z"
      fill="url(#bubbleGrad)"
    />
    {/* Lightning bolt */}
    <path
      d="M26 10L18 22H24L20 34L32 20H25L29 10H26Z"
      fill="url(#boltGrad)"
    />
    {/* Glow dot */}
    <circle cx="36" cy="10" r="4" fill="hsl(44, 100%, 52%)" opacity="0.8" />
    <circle cx="36" cy="10" r="6" fill="hsl(44, 100%, 52%)" opacity="0.2" />
    <defs>
      <linearGradient id="bubbleGrad" x1="8" y1="6" x2="36" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(333, 100%, 50%)" />
        <stop offset="1" stopColor="hsl(265, 85%, 58%)" />
      </linearGradient>
      <linearGradient id="boltGrad" x1="18" y1="10" x2="32" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="hsl(44, 100%, 52%)" />
        <stop offset="1" stopColor="hsl(0, 0%, 100%)" />
      </linearGradient>
    </defs>
  </svg>
);

export default VirtualTalkLogo;
