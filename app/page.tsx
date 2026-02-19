import MobileEmulator from "@/components/mobile-emulator"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <h1 className="text-white text-3xl md:text-4xl font-black mb-8 z-10 tracking-tight">
        Roshan Kumar <span className="text-pink-500">Portfolio</span>
      </h1>
      <div className="w-full max-w-4xl z-10">
        <MobileEmulator />
      </div>
    </main>
  )
}
