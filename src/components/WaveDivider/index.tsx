export default function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div style={{ backgroundColor: from, lineHeight: 0, display: "block" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "90px" }}
      >
        <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill={to} />
      </svg>
    </div>
  );
}
