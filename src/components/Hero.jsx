import { motion } from "framer-motion";

export default function Hero({ onStart }) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(34,211,238,0.25),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(59,130,246,0.25),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold tracking-tight text-white"
            >
              Voice Calling for the AI Era
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg text-slate-300"
            >
              NEOSERVICE lets you embed realtime, low-latency voice agents into your product. Start a call, stream transcripts, and analyze outcomes — all in your browser.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button onClick={onStart} className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-medium shadow-lg shadow-cyan-500/30">
                Start a demo call
              </button>
              <a href="#demo" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10">
                See how it works
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl -z-10 bg-[radial-gradient(400px_200px_at_60%_40%,rgba(6,182,212,0.4),transparent)]" />
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl">
              <div className="aspect-video rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-center text-slate-300">
                Live waveform visualization
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-800/60 border border-white/10 p-4">
                  <p className="text-xs text-slate-400">Latency</p>
                  <p className="text-lg text-white">~300ms</p>
                </div>
                <div className="rounded-lg bg-slate-800/60 border border-white/10 p-4">
                  <p className="text-xs text-slate-400">Transcripts</p>
                  <p className="text-lg text-white">Streaming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
