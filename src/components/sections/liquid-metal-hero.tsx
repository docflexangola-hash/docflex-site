"use client";

import { LiquidMetal, liquidMetalPresets } from "@paper-design/shaders-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: LiquidMetalHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hasShaderSupport, setHasShaderSupport] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
      if (!gl) setHasShaderSupport(false);
    } catch {
      setHasShaderSupport(false);
    }
  }, []);

  const shouldAnimate = !prefersReducedMotion && hasShaderSupport;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {hasShaderSupport ? (
        <LiquidMetal
          {...liquidMetalPresets[2]}
          style={{ position: "fixed", inset: 0, zIndex: -10 }}
        />
      ) : (
        <div
          className="fixed inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #0F3D73 0%, #1D6FD9 40%, #C7CDD6 70%, #0A0A0B 100%)",
          }}
        />
      )}

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
          transition={
            shouldAnimate
              ? { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
              : { duration: 0 }
          }
        >
          <motion.div className="flex justify-center" variants={itemVariants}>
            <svg
              viewBox="0 0 1024 1024"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  fill="#FFFFFF"
                  d="M3986 8214 c-34 -11 -64 -31 -101 -68 -92 -92 -85 21 -83 -1396 l3-1244 75 -37 75 -36 5 1284 5 1285 33 29 32 29 825 0 825 0 0 -332 c0 -196 4-348 10 -370 18 -63 70 -129 130 -162 l55 -31 353 -3 352 -3 0 -467 0 -467 29-16 c36 -21 81 -96 88 -147 3 -23 -17 -145 -56 -336 l-61 -298 0 -400 c0 -438-1 -442 -60 -473 -26 -13 -173 -15 -1265 -13 l-1235 3 -27 28 c-25 24 -28 36-32 108 l-3 80 -80 40 -80 40 4 -138 c3 -107 7 -145 21 -170 30 -57 80 -105 132 -129 l50 -24 1256 0 c1377 0 1299 -3 1378 59 20 16 50 53 67 83 l29 53 3 1359 2 1359 -157 161 c-404 414 -740 749 -765 762 -41 22 -1760 20 -1832 -2z m2484 -886 c0 -5 -123 -8 -272 -8 -255 0 -275 1 -306 20 -18 11 -37 32 -42 46-6 14 -10 146 -10 302 l0 277 315 -315 c173 -173 315 -318 315 -322z M4364 7100 c-55 -22 -70 -95 -29 -135 l24 -25 556 0 557 0 30 30 c25 26 29 36 24 63-4 18 -15 41 -27 52 -19 19 -34 20 -567 22 -301 1 -557 -2 -568 -7z M4354 6668 c-23 -11 -44 -48 -44 -77 0 -10 9 -30 21 -45 l20 -26 863 0 863 0 21 23 c30 32 29 81 -3 112 l-24 25 -848 -1 c-562 0 -855 -4 -869 -11z M4333 6238 c-11 -13 -23 -31 -26 -41 -10 -29 19 -86 49 -97 17 -7 177 -10 446 -8 l420 3 24 28 c31 37 31 81 -1 112 l-24 25 -434 0 -434 0 -20 -22z M5980 3460 l0 -510 90 0 90 0 0 510 0 510 -90 0 -90 0 0 -510z M2710 3429 l0 -482 218 6 c235 5 295 16 385 64 94 52 160 133 197 242 27 82 28 253 1 340 -35 112 -112 208 -207 255 -91 46 -161 56 -386 56 l-208 0 0 -481z m426 306 c67 -19 127 -73 161 -143 25 -51 28 -68 28 -157 0 -119 -23 -183 -87 -241 -64 -58 -119 -77 -233 -82 l-100 -4 0 321 0 321 91 0 c51 0 112 -6 140 -15z M5240 3430 l0 -480 100 0 100 0 0 190 0 190 180 0 180 0 0 80 0 80 -180 0 -180 0 0 130 0 130 205 0 205 0 0 80 0 80 -305 0 -305 0 0 -480z M3851 3649 c-52 -17 -76 -32 -121 -77 -64 -65 -88 -119 -97 -224 -15 -171 52 -305 185 -370 63 -31 72 -33 177 -33 98 0 116 3 165 26 108 51 167 127 191 247 31 162 -26 325 -141 397 -90 57 -241 71 -359 34z m236 -145 c51 -38 68 -88 68 -199 0 -112 -17 -162 -68 -199 -40 -30 -144 -30 -184 0 -55 41 -68 78 -68 194 0 122 17 169 75 208 29 20 45 23 93 20 36 -3 67 -11 84 -24z M4663 3652 c-142 -51 -215 -170 -215 -352 0 -160 59 -268 180 -327 52 -25 67 -28 167 -28 101 0 115 2 167 28 74 36 140 111 162 183 6 20 1 22 -90 34 -52 6 -97 10 -98 8 -1 -2 -9 -20 -18 -40 -23 -51 -60 -72 -122 -72 -63 0 -99 22 -129 78 -18 34 -22 58 -22 141 0 85 4 107 23 143 41 77 129 105 200 62 24 -15 60 -67 67 -96 0 -1 41 4 90 12 50 7 93 14 97 14 3 0 -1 18 -10 41 -23 60 -85 124 -150 156 -75 36 -218 44 -299 15z M6515 3656 c-95 -30 -159 -88 -202 -182 -44 -98 -41 -270 7 -364 26 -52 108 -124 165 -146 37 -14 75 -19 150 -19 87 0 107 3 155 26 63 30 113 77 141 131 10 20 19 40 19 43 0 3 -38 5 -83 5 -73 0 -86 -3 -103 -21 -61 -69 -201 -63 -256 12 -10 13 -22 45 -27 72 l-8 47 250 0 250 0 -6 86 c-9 150 -81 258 -204 304 -62 23 -184 26 -248 6z m201 -141 c26 -17 63 -86 64 -117 0 -16 -14 -18 -150 -18 -163 0 -161 -1 -139 57 14 37 47 72 84 89 37 18 106 12 141 -11z M7000 3655 c0 -5 149 -222 212 -309 l28 -39 -34 -46 c-38 -52 -199 -292 -204 -303 -2 -5 41 -8 96 -8 l100 0 67 106 c60 93 69 103 79 87 7 -10 36 -57 66 -105 l53 -88 113 0 c63 0 114 3 114 6 0 3 -50 77 -110 166 -61 88 -115 169 -120 179 -9 15 9 47 98 176 60 87 112 164 116 171 6 9 -16 12 -97 12 l-105 0 -58 -100 c-33 -54 -61 -99 -64 -99 -3 0 -32 44 -65 99 l-60 100 -112 0 c-62 0 -113 -2 -113 -5z M5960 2345 l0 -345 45 0 45 0 0 345 0 345 -45 0 -45 0 0 -345z M3851 2498 c-33 -90 -90 -238 -125 -330 l-64 -168 48 0 48 0 33 85 32 85 141 0 141 0 31 -82 31 -83 51 -3 52 -3 -21 53 c-11 29 -65 170 -119 313 -54 143 -102 268 -105 278 -6 13 -19 17 -60 17 l-52 0 -62 -162z m168 -96 c28 -78 51 -144 51 -147 0 -3 -50 -5 -111 -5 -102 0 -111 1 -104 18 6 15 87 232 101 271 2 8 6 12 8 10 2 -2 27 -68 55 -147z M4516 2480 c-16 -5 -42 -21 -57 -36 l-29 -28 0 32 c0 31 -1 32 -45 32 l-45 0 0 -240 0 -240 45 0 45 0 0 163 c0 190 9 217 79 238 55 16 99 3 128 -40 22 -32 23 -44 23 -197 l0 -164 45 0 45 0 0 158 c-1 213 -14 262 -86 304 -36 21 -110 30 -148 18z M4986 2475 c-89 -31 -135 -109 -136 -226 0 -133 67 -224 174 -236 66 -8 112 4 151 39 l35 30 0 -51 c0 -73 -21 -118 -64 -136 -67 -28 -160 -11 -188 34 -10 16 -23 21 -55 21 -50 0 -54 -11 -20 -60 35 -54 79 -73 172 -78 98 -5 157 16 198 69 41 55 47 98 47 357 l0 242 -46 0 c-46 0 -46 0 -42 -30 5 -31 -6 -41 -16 -15 -8 23 -85 55 -131 54 -22 0 -57 -6 -79 -14z m167 -85 c56 -44 74 -182 32 -246 -64 -98 -205 -74 -236 41 -23 85 9 193 65 215 40 17 112 11 139 -10z M5575 2481 c-134 -34 -207 -165 -176 -312 25 -114 106 -179 225 -179 81 0 129 22 179 81 80 93 73 274 -15 356 -47 44 -150 70 -213 54z m123 -91 c43 -26 63 -77 64 -155 0 -109 -51 -175 -135 -175 -87 0 -136 63 -137 174 0 140 105 219 208 156z M6296 2479 c-49 -12 -92 -43 -111 -79 -26 -50 -20 -60 30 -60 25 0 45 5 45 10 0 6 11 22 25 35 19 19 35 25 70 25 61 0 105 -40 105 -94 l0 -36 -81 0 c-100 0 -152 -15 -194 -55 -46 -43 -53 -93 -23 -153 31 -63 71 -84 155 -84 57 0 71 3 109 31 l44 31 0 -25 c0 -22 4 -25 40 -25 l40 0 0 177 c0 159 -2 181 -21 220 -34 70 -136 106 -233 82z m164 -294 c0 -77 -51 -125 -131 -125 -74 0 -113 62 -74 118 20 27 63 40 143 41 l62 1 0 -35z"
                />
                <path
                  fill="#4FA3F7"
                  d="M5560 6168 c-37 -40 -27 -65 80 -192 55 -65 100 -121 100 -125 0 -11-255 -188 -375 -260 -285 -172 -586 -286 -845 -322 -124 -16 -340 -14 -445 6-106 20 -223 61 -313 111 -96 53 -210 172 -255 263 -42 88 -48 81 -55 -70 -5-123 8 -183 66 -293 48 -91 172 -221 279 -293 226 -150 536 -225 861 -209 449 22 859 175 1366 508 49 32 90 58 92 58 1 0 39 -44 85 -97 45 -54 89 -104 97 -110 21 -17 77 -16 91 1 12 15 181 839 181 885 0 37 -41 87 -83 100 -42 13-101 18 -497 41 -419 25 -405 25 -430 -2z"
                />
              </g>
            </svg>
          </motion.div>

          {badge && (
            <motion.div className="flex justify-center" variants={itemVariants}>
              <Badge
                variant="secondary"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm font-mono text-xs tracking-wide px-3 py-1"
              >
                {badge}
              </Badge>
            </motion.div>
          )}

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h1
              role="heading"
              aria-level={1}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            <motion.p
              className="max-w-3xl mx-auto text-xl sm:text-2xl text-white/90 leading-relaxed"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={buttonVariants}
          >
            <LiquidMetalButton
              label={primaryCtaLabel}
              onClick={onPrimaryCtaClick}
              size="lg"
            />

            {secondaryCtaLabel && onSecondaryCtaClick && (
              <LiquidMetalButton
                label={secondaryCtaLabel}
                onClick={onSecondaryCtaClick}
                size="lg"
              />
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-12" variants={itemVariants}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-2xl">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-center text-center"
                          initial={
                            shouldAnimate
                              ? { opacity: 0, x: -20 }
                              : { opacity: 1, x: 0 }
                          }
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: shouldAnimate ? 0.8 + index * 0.1 : 0,
                          }}
                        >
                          <p className="text-white/90 font-medium text-lg">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
