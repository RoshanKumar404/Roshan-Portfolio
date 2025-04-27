import MobileEmulator from "@/components/mobile-emulator"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 md:p-8 bg-[url('/stars-bg.png')] bg-cover">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-8">Roshan Kumar Portfolio</h1>
      <div className="w-full max-w-4xl">
        <MobileEmulator />
      </div>
    </main>
  )
}
