"use client";
import { useState } from "react";
import { earthLayers } from "@/data/plateTectonics";

export default function EarthInteriorDiagram() {
  const [active, setActive] = useState(earthLayers[0].name);
  return (
    <div className="grid md:grid-cols-2 gap-4 items-center">
      <div className="relative mx-auto h-60 w-60 rounded-full bg-slate-900 shadow-glow flex items-center justify-center">
        {earthLayers.map((layer, idx) => (
          <button
            key={layer.name}
            onClick={() => setActive(layer.name)}
            className={`absolute rounded-full bg-gradient-to-br ${layer.color} transition-transform ${active === layer.name ? "scale-105" : ""}`}
            style={{ width: `${220 - idx * 42}px`, height: `${220 - idx * 42}px` }}
          />
        ))}
      </div>
      <div className="space-y-2">
        {earthLayers.map((layer) => (
          <div key={layer.name} className={`glass-panel p-3 ${active === layer.name ? "border-earth" : ""}`}>
            <p className="font-medium">{layer.name}</p>
            <p className="text-sm text-slate-300">{layer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
