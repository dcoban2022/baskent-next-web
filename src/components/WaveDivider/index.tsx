export default function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ backgroundColor: from, lineHeight: 0, display: "block" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "60px" }}
      >
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={to} />
      </svg>
    </div>
  );
}
