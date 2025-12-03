const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay"
       style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}>
  </div>
);

export default NoiseOverlay;