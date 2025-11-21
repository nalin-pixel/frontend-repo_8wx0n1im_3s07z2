import { useEffect, useRef, useState } from "react";

export default function Demo() {
  const [callId, setCallId] = useState(null);
  const [events, setEvents] = useState([]);
  const mediaStreamRef = useRef(null);
  const audioRef = useRef(null);

  const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

  async function startCall() {
    const res = await fetch(`${API_BASE}/api/calls`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title: "Demo Call", participant: "Guest" }) });
    const data = await res.json();
    setCallId(data.call_id);
    setEvents((prev) => [...prev, { type: "status", text: "Call started" }]);

    // get mic
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
    } catch (e) {
      setEvents((prev) => [...prev, { type: "error", text: `Microphone error: ${e.message}` }]);
    }
  }

  async function pushTranscript(text) {
    if (!callId) return;
    await fetch(`${API_BASE}/api/calls/event`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ call_id: callId, type: "transcript", text }) });
    setEvents((prev) => [...prev, { type: "transcript", text }]);
  }

  async function endCall() {
    if (!callId) return;
    await fetch(`${API_BASE}/api/calls/end`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ call_id: callId }) });
    setEvents((prev) => [...prev, { type: "status", text: "Call ended" }]);
    setCallId(null);
    if (mediaStreamRef.current) mediaStreamRef.current.getTracks().forEach((t) => t.stop());
  }

  // Simulate incoming transcript every few seconds for demo
  useEffect(() => {
    if (!callId) return;
    const id = setInterval(() => {
      pushTranscript("This is a simulated transcript segment.");
    }, 4000);
    return () => clearInterval(id);
  }, [callId]);

  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={startCall} disabled={!!callId} className="px-4 py-2 rounded-lg bg-cyan-500 text-white disabled:opacity-50">Start Call</button>
            <button onClick={endCall} disabled={!callId} className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-50">End Call</button>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-medium mb-2">Transcript</h3>
              <div className="h-60 overflow-auto rounded-lg bg-slate-800/60 border border-white/10 p-4 text-slate-200 text-sm space-y-2">
                {events.filter(e=>e.type!=="error").map((e, i) => (
                  <div key={i} className={e.type === "transcript" ? "" : "text-slate-400"}>
                    {e.type === "transcript" ? e.text : `• ${e.text}`}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Status</h3>
              <div className="h-60 overflow-auto rounded-lg bg-slate-800/60 border border-white/10 p-4 text-slate-200 text-sm">
                {events.filter(e=>e.type==="error").map((e, i) => (
                  <div key={i} className="text-red-300">{e.text}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} autoPlay />
    </section>
  );
}
