import { createClient } from '@supabase/supabase-js';

export const revalidate = 3600; // Rozana update karega

export default async function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: products } = await supabase.from('products').select('*');

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm border-b p-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AffiliatePilot</h1>
        <a href="https://paypal.me/AbuHamdan978/6" target="_blank" className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-600 transition">Go Pro 💎</a>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-20 text-center px-4">
        <h2 className="text-5xl font-extrabold mb-4">AI-Powered Global Store</h2>
        <p className="text-lg text-gray-300 mb-8">Curated by PilotBot. Auto-Shipped. Best Margins.</p>
        <a href="#store" className="bg-blue-600 px-8 py-3 rounded-lg font-bold">Shop Trending Deals</a>
      </section>

      {/* LIVE PRODUCT STORE */}
      <section id="store" className="max-w-7xl mx-auto p-6 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">🤖 PilotBot's Daily Finds</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map(p => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border ch">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" loading="lazy"/>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 h-10">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{p.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-extrabold text-blue-600">${p.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEGAL (AdSense Requirement) */}
      <section id="legal" className="max-w-4xl mx-auto p-6 mt-20 mb-20 bg-white rounded-2xl border shadow-sm text-sm text-gray-600 space-y-6">
        <div><h3 className="font-bold text-gray-900 text-lg mb-2">Privacy Policy</h3><p>We collect emails for alerts. Payments via PayPal. Auto-shipped by PilotBot.</p></div>
        <div><h3 className="font-bold text-gray-900 text-lg mb-2">Terms of Service</h3><p>Prices include margins. Orders fulfilled automatically via CJ Dropshipping.</p></div>
        <div><h3 className="font-bold text-gray-900 text-lg mb-2">Affiliate Disclosure</h3><p>As an Amazon Associate, I earn from qualifying purchases.</p></div>
      </section>

    </main>
  );
}
