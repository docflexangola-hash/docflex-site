"use client";

interface DeviceMockupProps {
  type: "desktop" | "iphone" | "ipad";
  imageSrc?: string;
  alt: string;
  href?: string;
}

export default function DeviceMockup({
  type,
  imageSrc,
  alt,
  href,
}: DeviceMockupProps) {
  const content = (() => {
    switch (type) {
      case "desktop":
        return (
          <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
            <svg
              viewBox="0 0 320 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect
                x="1"
                y="1"
                width="318"
                height="170"
                rx="8"
                fill="#1a1a1a"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="6" y="6" width="308" height="156" rx="4" fill="#f5f5f5" />
              {imageSrc ? (
                <image
                  href={imageSrc}
                  x="6"
                  y="6"
                  width="308"
                  height="156"
                  preserveAspectRatio="xMidYMid slice"
                />
              ) : (
                <>
                  <rect x="16" y="16" width="60" height="6" rx="2" fill="#ddd" />
                  <rect x="16" y="30" width="288" height="4" rx="1" fill="#eee" />
                  <rect x="16" y="38" width="200" height="4" rx="1" fill="#eee" />
                  <rect x="16" y="52" width="136" height="80" rx="4" fill="#e0e0e0" />
                  <rect x="160" y="52" width="144" height="36" rx="4" fill="#f0f0f0" />
                  <rect x="160" y="96" width="144" height="36" rx="4" fill="#f0f0f0" />
                </>
              )}
              <rect
                x="1"
                y="171"
                width="318"
                height="20"
                rx="0"
                fill="#2a2a2a"
              />
              <circle cx="160" cy="181" r="4" fill="#444" />
              <rect x="120" y="191" width="80" height="4" rx="2" fill="#333" />
            </svg>
          </div>
        );

      case "iphone":
        return (
          <div className="relative w-full" style={{ aspectRatio: "9/19.5" }}>
            <svg
              viewBox="0 0 180 390"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect
                x="1"
                y="1"
                width="178"
                height="388"
                rx="36"
                fill="#1a1a1a"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="6" y="6" width="168" height="378" rx="32" fill="#f5f5f5" />
              {imageSrc ? (
                <clipPath id="iphone-clip">
                  <rect x="6" y="6" width="168" height="378" rx="32" />
                </clipPath>
              ) : (
                <>
                  <rect x="60" y="14" width="60" height="24" rx="12" fill="#1a1a1a" />
                  <rect x="16" y="50" width="148" height="8" rx="2" fill="#eee" />
                  <rect x="16" y="66" width="100" height="6" rx="2" fill="#eee" />
                  <rect x="16" y="84" width="148" height="120" rx="8" fill="#e0e0e0" />
                  <rect x="16" y="216" width="148" height="8" rx="2" fill="#eee" />
                  <rect x="16" y="232" width="120" height="6" rx="2" fill="#eee" />
                  <rect x="16" y="248" width="148" height="100" rx="8" fill="#e8e8e8" />
                </>
              )}
              {imageSrc && (
                <image
                  href={imageSrc}
                  x="6"
                  y="6"
                  width="168"
                  height="378"
                  clipPath="url(#iphone-clip)"
                  preserveAspectRatio="xMidYMid slice"
                />
              )}
              <rect x="6" y="364" width="168" height="20" rx="0" fill="#f5f5f5" />
              <circle cx="90" cy="375" r="6" fill="none" stroke="#ccc" strokeWidth="1" />
            </svg>
          </div>
        );

      case "ipad":
        return (
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <svg
              viewBox="0 0 240 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect
                x="1"
                y="1"
                width="238"
                height="178"
                rx="12"
                fill="#1a1a1a"
                stroke="#333"
                strokeWidth="1"
              />
              <rect x="6" y="6" width="228" height="168" rx="8" fill="#f5f5f5" />
              {imageSrc ? (
                <clipPath id="ipad-clip">
                  <rect x="6" y="6" width="228" height="168" rx="8" />
                </clipPath>
              ) : (
                <>
                  <circle cx="120" cy="12" r="3" fill="#333" />
                  <rect x="16" y="24" width="80" height="6" rx="2" fill="#eee" />
                  <rect x="16" y="38" width="208" height="4" rx="1" fill="#eee" />
                  <rect x="16" y="50" width="208" height="4" rx="1" fill="#eee" />
                  <rect x="16" y="64" width="100" height="80" rx="6" fill="#e0e0e0" />
                  <rect x="128" y="64" width="96" height="36" rx="4" fill="#f0f0f0" />
                  <rect x="128" y="108" width="96" height="36" rx="4" fill="#f0f0f0" />
                </>
              )}
              {imageSrc && (
                <image
                  href={imageSrc}
                  x="6"
                  y="6"
                  width="228"
                  height="168"
                  clipPath="url(#ipad-clip)"
                  preserveAspectRatio="xMidYMid slice"
                />
              )}
              <circle cx="120" cy="170" r="4" fill="none" stroke="#ccc" strokeWidth="1" />
            </svg>
          </div>
        );
    }
  })();

  const wrapper = (
    <div className="relative group">
      <div className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-x-2">
        {content}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl pointer-events-none" />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        aria-label={`Ver ${alt}`}
      >
        {wrapper}
      </a>
    );
  }

  return wrapper;
}
