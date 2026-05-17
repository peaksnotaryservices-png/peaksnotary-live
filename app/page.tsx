export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 font-sans">

      <section className="relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-stone-950 to-stone-950" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="uppercase tracking-[0.3em] text-emerald-300 text-sm mb-5">
                Peaks Notary Services
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Summit County Mobile & Remote Notary Services
              </h1>

              <p className="text-xl text-stone-300 leading-relaxed mb-10 max-w-2xl">
                Professional mountain-based mobile notary and Colorado remote online notarization services.
                Serving Summit County with flexible scheduling, secure online notarizations, and mobile appointments throughout the high country.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://calendly.com/peaksnotaryservices"
                  target="_blank"
                  className="bg-emerald-600 hover:bg-emerald-500 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg"
                >
                  Request Appointment
                </a>

                <a
                  href="#pricing"
                  className="border border-stone-700 hover:border-stone-500 transition px-8 py-4 rounded-2xl font-semibold text-lg"
                >
                  View Pricing
                </a>

              </div>
            </div>

            <div className="bg-stone-900/80 backdrop-blur border border-stone-800 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-semibold mb-8">
                Why Clients Choose Peaks Notary Services
              </h2>

              <div className="space-y-6">

                <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                    Mobile & Remote Convenience
                  </h3>

                  <p className="text-stone-400 leading-relaxed">
                    Mobile appointments throughout Summit County and secure remote online notarization statewide.
                  </p>
                </div>

                <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                    Colorado Compliant
                  </h3>

                  <p className="text-stone-400 leading-relaxed">
                    Secure notarization services performed using Colorado-compliant systems and procedures.
                  </p>
                </div>

                <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                    Built For Mountain Communities
                  </h3>

                  <p className="text-stone-400 leading-relaxed">
                    Flexible scheduling designed around mountain traffic, resort access, and local high-country logistics.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Services
          </h2>

          <p className="text-stone-400 text-xl max-w-3xl mx-auto">
            Professional mobile and remote notarization services throughout Summit County and Colorado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 hover:border-emerald-500/50 transition">
            <h3 className="text-2xl font-bold mb-4">
              Mobile Notary Services
            </h3>

            <p className="text-stone-400 leading-relaxed text-lg">
              Traveling appointments throughout Summit County including Dillon, Frisco, Keystone, and Breckenridge.
            </p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 hover:border-emerald-500/50 transition">
            <h3 className="text-2xl font-bold mb-4">
              Remote Online Notarization
            </h3>

            <p className="text-stone-400 leading-relaxed text-lg">
              Secure Colorado remote online notarization completed through approved platforms.
            </p>
          </div>

          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 hover:border-emerald-500/50 transition">
            <h3 className="text-2xl font-bold mb-4">
              Real Estate Documents
            </h3>

            <p className="text-stone-400 leading-relaxed text-lg">
              Professional notarization support for real estate and transaction-related documents.
            </p>
          </div>

        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-stone-800 bg-stone-900/40"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Flat-Rate Pricing
            </h2>

            <p className="text-stone-400 text-xl max-w-3xl mx-auto">
              Transparent mountain-service pricing designed to cover travel, scheduling, mountain driving, equipment, and professional notarial services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-4">
                Local Zone
              </h3>

              <p className="text-5xl font-bold text-emerald-400 mb-6">
                $60–75
              </p>

              <p className="text-stone-400 text-lg leading-relaxed">
                Dillon, Silverthorne, and Frisco appointments.
              </p>
            </div>

            <div className="bg-stone-950 border border-emerald-700 rounded-3xl p-10 shadow-2xl scale-[1.02]">
              <h3 className="text-3xl font-bold mb-4">
                Extended Summit
              </h3>

              <p className="text-5xl font-bold text-emerald-400 mb-6">
                $90–125
              </p>

              <p className="text-stone-400 text-lg leading-relaxed">
                Keystone, Breckenridge, Copper Mountain, and Blue River appointments.
              </p>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-4">
                Remote / After Hours
              </h3>

              <p className="text-5xl