import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300">
      <Navbar />
      <main>
        <Hero onStart={() => {
          const demo = document.getElementById("demo");
          if (demo) demo.scrollIntoView({ behavior: "smooth" });
        }} />
        <Features />
        <Demo />
      </main>
      <footer className="py-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} NEOSERVICE</footer>
    </div>
  );
}

export default App;
