export function HalloweenBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-black">
      {/* Netflix-style gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />
      
      {/* Subtle Halloween orange glow - top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-orange-950/20 to-transparent" />
      
      {/* Red glow - Netflix accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E50914]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-900/10 rounded-full blur-[120px]" />
    </div>
  );
}