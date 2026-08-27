import { MapPin, MessageSquare } from "lucide-react";

const products = [
  { name: "Dinheiro em Mão", href: "https://dinheiroemmao.com" },
  { name: "Botforge", href: "#" },
];

const services = [
  "Desenvolvimento de Sites",
  "Aplicações Mobile",
  "Integração Multicaixa Express",
  "Consultoria Tecnológica",
  "Gestão de Bases de Dados",
  "Automação de Processos",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 1024 1024"
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path
                    fill="#FFFFFF"
                    d="M3986 8214 c-34 -11 -64 -31 -101 -68 -92 -92 -85 21 -83 -1396 l3-1244 75 -37 75 -36 5 1284 5 1285 33 29 32 29 825 0 825 0 0 -332 c0 -196 4-348 10 -370 18 -63 70 -129 130 -162 l55 -31 353 -3 352 -3 0 -467 0 -467 29-16 c36 -21 81 -96 88 -147 3 -23 -17 -145 -56 -336 l-61 -298 0 -400 c0 -438-1 -442 -60 -473 -26 -13 -173 -15 -1265 -13 l-1235 3 -27 28 c-25 24 -28 36-32 108 l-3 80 -80 40 -80 40 4 -138 c3 -107 7 -145 21 -170 30 -57 80 -105 132 -129 l50 -24 1256 0 c1377 0 1299 -3 1378 59 20 16 50 53 67 83 l29 53 3 1359 2 1359 -157 161 c-404 414 -740 749 -765 762 -41 22 -1760 20 -1832 -2z m2484 -886 c0 -5 -123 -8 -272 -8 -255 0 -275 1 -306 20 -18 11 -37 32 -42 46-6 14 -10 146 -10 302 l0 277 315 -315 c173 -173 315 -318 315 -322z M4364 7100 c-55 -22 -70 -95 -29 -135 l24 -25 556 0 557 0 30 30 c25 26 29 36 24 63-4 18 -15 41 -27 52 -19 19 -34 20 -567 22 -301 1 -557 -2 -568 -7z M4354 6668 c-23 -11 -44 -48 -44 -77 0 -10 9 -30 21 -45 l20 -26 863 0 863 0 21 23 c30 32 29 81 -3 112 l-24 25 -848 -1 c-562 0 -855 -4 -869 -11z M4333 6238 c-11 -13 -23 -31 -26 -41 -10 -29 19 -86 49 -97 17 -7 177 -10 446 -8 l420 3 24 28 c31 37 31 81 -1 112 l-24 25 -434 0 -434 0 -20 -22z M5980 3460 l0 -510 90 0 90 0 0 510 0 510 -90 0 -90 0 0 -510z M2710 3429 l0 -482 218 6 c235 5 295 16 385 64 94 52 160 133 197 242 27 82 28 253 1 340 -35 112 -112 208 -207 255 -91 46 -161 56 -386 56 l-208 0 0 -481z m426 306 c67 -19 127 -73 161 -143 25 -51 28 -68 28 -157 0 -119 -23 -183 -87 -241 -64 -58 -119 -77 -233 -82 l-100 -4 0 321 0 321 91 0 c51 0 112 -6 140 -15z M5240 3430 l0 -480 100 0 100 0 0 190 0 190 180 0 180 0 0 80 0 80 -180 0 -180 0 0 130 0 130 205 0 205 0 0 80 0 80 -305 0 -305 0 0 -480z M3851 3649 c-52 -17 -76 -32 -121 -77 -64 -65 -88 -119 -97 -224 -15 -171 52 -305 185 -370 63 -31 72 -33 177 -33 98 0 116 3 165 26 108 51 167 127 191 247 31 162 -26 325 -141 397 -90 57 -241 71 -359 34z m236 -145 c51 -38 68 -88 68 -199 0 -112 -17 -162 -68 -199 -40 -30 -144 -30 -184 0 -55 41 -68 78 -68 194 0 122 17 169 68 199 40 30 144 30 184 0 55 -41 68 -78 68 -194 0 -122 -17 -169 -68 -199 -40 -30 -144 -30 -184 0 -55 41 -68 78 -68 194 0 122 17 169 68 199 40 30 144 30 184 0 55 -41 68 -78 68 -194z"
                  />
                  <path
                    fill="#4FA3F7"
                    d="M5560 6168 c-37 -40 -27 -65 80 -192 55 -65 100 -121 100 -125 0 -11-255 -188 -375 -260 -285 -172 -586 -286 -845 -322 -124 -16 -340 -14 -445 6-106 20 -223 61 -313 111 -96 53 -210 172 -255 263 -42 88 -48 81 -55 -70 -5-123 8 -183 66 -293 48 -91 172 -221 279 -293 226 -150 536 -225 861 -209 449 22 859 175 1366 508 49 32 90 58 92 58 1 0 39 -44 85 -97 45 -54 89 -104 97 -110 21 -17 77 -16 91 1 12 15 181 839 181 885 0 37 -41 87 -83 100 -42 13-101 18 -497 41 -419 25 -405 25 -430 -2z"
                  />
                </g>
              </svg>
              <h3 className="font-heading text-lg font-bold">
                DocFlex Angola
              </h3>
            </div>
            <p className="text-silver text-sm leading-relaxed">
              Soluções completas de tecnologia para Angola. Desenvolvimento de
              sites, apps, consultoria e automação.
            </p>
            <p className="text-silver/60 font-mono text-xs">
              DocFlex Angola — Prestação de Serviços, Lda
            </p>
            <p className="text-silver/60 font-mono text-xs">
              NIF: 5002888068
            </p>
          </div>

          <div className="space-y-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-300">
            <h3 className="font-heading text-lg font-bold">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-silver text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-300">
            <h3 className="font-heading text-lg font-bold">Produtos</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver hover:text-white transition-colors text-sm"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors duration-300">
            <h3 className="font-heading text-lg font-bold">Contacto</h3>
            <div className="space-y-3 text-sm text-silver">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-silver/60" />
                <span>Benguela, Angola</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="size-4 text-silver/60" />
                <a
                  href="https://wa.me/244933986318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Business
                </a>
              </div>
              <p className="text-silver/60">docflex.angola@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-silver/60 text-xs">
            &copy; {currentYear} DocFlex Angola — Prestação de Serviços, Lda.
            Todos os direitos reservados.
          </p>
          <p className="text-silver/40 text-xs font-mono">
            Benguela, Angola
          </p>
        </div>
      </div>
    </footer>
  );
}
