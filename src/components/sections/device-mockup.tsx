"use client";

import { useState, useRef, useCallback } from "react";

interface DeviceMockupProps {
  type: "desktop" | "iphone" | "ipad";
  imageSrc?: string;
  alt: string;
  fullPageSrc?: string;
}

const screenOverlay = {
  iphone: {
    left: "3.33%",
    top: "1.54%",
    width: "93.33%",
    height: "96.92%",
    radius: "32px",
  },
  desktop: {
    left: "1.875%",
    top: "3%",
    width: "96.25%",
    height: "78%",
    radius: "4px",
  },
  ipad: {
    left: "2.5%",
    top: "3.33%",
    width: "95%",
    height: "93.33%",
    radius: "8px",
  },
} as const;

const deviceFrame = {
  iphone: { viewBox: "0 0 180 390", ratio: "9/19.5" },
  desktop: { viewBox: "0 0 320 200", ratio: "16/10" },
  ipad: { viewBox: "0 0 240 180", ratio: "4/3" },
} as const;

export default function DeviceMockup({
  type,
  imageSrc,
  alt,
  fullPageSrc,
}: DeviceMockupProps) {
  const [indicatorVisible, setIndicatorVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setIndicatorVisible(false);
  }, []);

  const overlay = screenOverlay[type];
  const frame = deviceFrame[type];
  const src = fullPageSrc || imageSrc;

  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-x-2">
        {/* SVG Device Frame */}
        <div className="relative w-full" style={{ aspectRatio: frame.ratio }}>
          <svg
            viewBox={frame.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {type === "iphone" && (
              <>
                <rect x="1" y="1" width="178" height="388" rx="36" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                <rect x="6" y="6" width="168" height="378" rx="32" fill="#f5f5f5" />
                <rect x="60" y="14" width="60" height="24" rx="12" fill="#1a1a1a" />
                <rect x="6" y="364" width="168" height="20" rx="0" fill="#f5f5f5" />
                <circle cx="90" cy="375" r="6" fill="none" stroke="#ccc" strokeWidth="1" />
              </>
            )}
            {type === "desktop" && (
              <>
                <rect x="1" y="1" width="318" height="170" rx="8" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                <rect x="6" y="6" width="308" height="156" rx="4" fill="#f5f5f5" />
                <rect x="1" y="171" width="318" height="20" rx="0" fill="#2a2a2a" />
                <circle cx="160" cy="181" r="4" fill="#444" />
                <rect x="120" y="191" width="80" height="4" rx="2" fill="#333" />
              </>
            )}
            {type === "ipad" && (
              <>
                <rect x="1" y="1" width="238" height="178" rx="12" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                <rect x="6" y="6" width="228" height="168" rx="8" fill="#f5f5f5" />
                <circle cx="120" cy="12" r="3" fill="#333" />
                <circle cx="120" cy="170" r="4" fill="none" stroke="#ccc" strokeWidth="1" />
              </>
            )}
          </svg>

          {/* Scrollable Screen Content */}
          {src && (
            <div
              className="absolute"
              style={{
                left: overlay.left,
                top: overlay.top,
                width: overlay.width,
                height: overlay.height,
                borderRadius: overlay.radius,
                overflow: "hidden",
              }}
            >
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto block"
                  draggable={false}
                />
              </div>

              {/* Scroll Indicator */}
              {indicatorVisible && fullPageSrc && (
                <div
                  className="absolute bottom-0 left-0 right-0 flex justify-center pb-3 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: indicatorVisible ? 1 : 0 }}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white animate-bounce">
                      <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-white text-[10px] font-mono">scroll</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none" />

      {/* Hide scrollbar for this component */}
      <style>{`
        .group div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
