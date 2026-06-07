import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  // Fetch Live Products from Supabase (Updated by Agent)
  useEffect(() => {
    fetch('https://YOUR_SUPABASE_URL.rest/v1/products?select=*&limit=8', {
      headers: { 'apikey': 'YOUR_SUPABASE_ANON_KEY' }
    }).then(r => r.json()).then(d => setProducts(d));
  }, []);

  return (
    <html lang="en">
    <head>
      <title>AffiliatePilot Global - AI Curated Deals & Dropshipping</title>
      <meta name="description" content="Discover the best global deals curated by AI. Track prices, find coupons, and buy trending products with fast shipping."/>
    </head>
    <body className="bg-gray-50 text-gray-900 font-sans">
      
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm border-b p-4 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AffiliatePilot</h1>
        <a href="https://paypal.me/AbuHamdan978/6" target="_blank" className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-bold">Go Pro 💎</a>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80')] opacity-20 bg-cover"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-extrabold mb-4">AI-Powered Global Store</h2>
          <p className="text-lg text-gray-300 mb-8">Curated by PilotBot. 50% Margins. Auto-Shipped to Customers.</p>
          <a href="#store" className="bg-blue-600 px-8 py-3 rounded-lg font-bold">Shop Trending Deals</a>
        </div>
      </section>

      {/* LIVE PRODUCT STORE (From Agent's Database) */}
      <section id="store" className="max-w-7xl mx-auto p-6 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">🤖 PilotBot's Daily Finds</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border ch">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" loading="lazy"/>
              <div className="p-5">
                <h3 className="font-bold text-sm mb-2 h-10">{p.name}</h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{p.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl font-extrabold text-blue-600">${p.price}</span>
                  {/* In real app, this goes to checkout passing p.id to PayPal */}
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADSENSE REQUIRED PAGES */}
      <section id="legal" className="max-w-4xl mx-auto p-6 mt-20 mb-20 bg-white rounded-2xl border shadow-sm text-sm text-gray-600 space-y-6">
        <div><h3 className="font-bold text-gray-900 text-lg mb-2">Privacy Policy</h3><p>We collect emails for alerts. Payments processed by PayPal. We use Google AdSense/Analytics. Auto-shipped via CJ Dropshipping.</p></div>
        <div><h3 className="font-bold text-gray-900 text-lg mb-2">Terms of Service</h3><p>Prices include margins. Orders are fulfilled automatically by our AI Agent via third-party suppliers.</p></div>
        <div><h3 className="font-bold text-gray-900 text-lg mb-2">Affiliate Disclosure</h3><p>As an Amazon Associate, I earn from qualifying purchases. We also earn margins on dropshipped products.</p></div>
      </section>

    </body>
    </html>
  );
}
