export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-transform"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect x="2" y="20" width="6" height="18" fill="#ea580c" rx="1" />
      <rect x="10" y="14" width="6" height="24" fill="#ea580c" rx="1" />
      <rect x="18" y="8" width="6" height="30" fill="#ea580c" rx="1" />
      <rect x="26" y="12" width="6" height="26" fill="#ea580c" rx="1" />

      <rect x="4" y="4" width="32" height="6" fill="url(#logoGradient)" rx="1" />
      <circle cx="10" cy="7" r="1.5" fill="white" opacity="0.7" />
      <circle cx="16" cy="7" r="1.5" fill="white" opacity="0.7" />
      <circle cx="22" cy="7" r="1.5" fill="white" opacity="0.7" />
      <circle cx="28" cy="7" r="1.5" fill="white" opacity="0.7" />
    </svg>
  );
}
