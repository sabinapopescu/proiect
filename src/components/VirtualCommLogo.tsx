const VirtualCommLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Speech bubble left */}
    <path
      d="M6 14C6 10.6863 8.68629 8 12 8H24C27.3137 8 30 10.6863 30 14V22C30 25.3137 27.3137 28 24 28H16L10 34V28H12C8.68629 28 6 25.3137 6 22V14Z"
      fill="hsl(231, 85%, 53%)"
    />
    {/* Speech bubble right */}
    <path
      d="M18 20C18 16.6863 20.6863 14 24 14H36C39.3137 14 42 16.6863 42 20V28C42 31.3137 39.3137 34 36 34V40L30 34H24C20.6863 34 18 31.3137 18 28V20Z"
      fill="hsl(193, 88%, 62%)"
      opacity="0.9"
    />
    {/* Wifi signal arcs */}
    <path
      d="M28 6C31.5 6 34.5 7.5 36.5 9.5"
      stroke="hsl(231, 85%, 53%)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <path
      d="M28 2C33 2 37.5 4 40.5 7"
      stroke="hsl(193, 88%, 62%)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.4"
    />
    {/* Dots in bubbles */}
    <circle cx="14" cy="18" r="1.5" fill="white" />
    <circle cx="18" cy="18" r="1.5" fill="white" />
    <circle cx="22" cy="18" r="1.5" fill="white" />
    <circle cx="28" cy="24" r="1.5" fill="white" />
    <circle cx="32" cy="24" r="1.5" fill="white" />
    <circle cx="36" cy="24" r="1.5" fill="white" />
  </svg>
);

export default VirtualCommLogo;
