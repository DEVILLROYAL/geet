"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainPage() {
  const [prompt, setPrompt] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  async function generateMusic() {
    if (!prompt.trim()) return;
    setLoading(true);
    setAudioUrl("");

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setAudioUrl(data.audioUrl || data.url || "");
    } catch (err) {
      console.error(err);
      alert("Error generating music — check backend!");
    }

    setLoading(false);
  }

  return (
    <div className="w-full">

      {/* Header */}
      <header className="fixed w-full z-30 top-0 bg-black/80 backdrop-blur-md text-white">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-2xl font-bold">Geet</div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 font-semibold">
            <a href="#hero" className="hover:text-indigo-400">Home</a>
            <a href="#create" className="hover:text-indigo-400">Create</a>
          </div>

          {/* Login / Sign Up */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md">
              Login
            </button>
            <button className="px-4 py-2 bg-white text-indigo-900 hover:bg-gray-100 rounded-md">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu icon (optional) */}
          {/* You can add a hamburger + mobile menu here if needed */}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-28 pb-24 bg-cover bg-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1648536/pexels-photo-1648536.jpeg')",
        }}
      >
        <div
          className="bg-black/60 p-8 md:p-16 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Geet — AI Music Generator
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Describe what you want and let AI create original music for you.
          </p>
          <button
            onClick={() => document.getElementById("create")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold"
          >
            Create Now
          </button>
        </div>
      </section>

      {/* Main (Prompt & Music Creation) */}
      <section
        id="create"
        className="py-20 bg-gray-100 text-gray-900 px-6"
        data-aos="fade-up"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Create Your Music</h2>

          {/* Prompt Input */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Describe your music..."
              className="w-full p-3 rounded bg-white border border-gray-300 focus:outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Generate Button */}
            <button
              onClick={generateMusic}
              disabled={loading}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-semibold"
            >
              {loading ? "Generating…" : "Generate Music"}
            </button>
          </div>

          {/* Audio Player */}
          {audioUrl && (
            <div className="mt-10" data-aos="fade-in">
              <h3 className="text-2xl font-semibold mb-2">Your Track</h3>
              <audio controls src={audioUrl} className="w-full"></audio>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
