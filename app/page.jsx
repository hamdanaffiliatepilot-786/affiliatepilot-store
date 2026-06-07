"use client"

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      async function loadData() {
        const { data } = await supabase.from('products').select('*');
        if(data) setProducts(data);
      }
      loadData();
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AffiliatePilot <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded">PRO</span></h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#tools">Tools</a>
            <a href="#store">Store</a>
            <a href="#legal">Legal</a>
          </div>
          <a href="https://paypal.me/AbuHamdan978/6" target="_blank" className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-amber-600 transition">Go Pro 💎</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">AI-Powered Global<br/><span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Shopping Empire</span></h2>
          <p className="text-lg text-gray-300 mb-8">Curated by PilotBot. Real-Time Currency, AI Deals, Auto-Dropshipping & Live Coupons.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#tools" className="bg-blue-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition">Use Free Tools</a>
            <a href="#store" className="bg-white/10 border border-white/20 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/15 transition">Shop Deals</a>
          </div>
        </div>
      </section>

      {/* REAL TOOLS */}
      <section id="tools" className="py-20 bg-white max-w-7xl mx-auto px-4">
        <div className="text-center mb-14"><h2 className="text-3xl font-bold">Smart Global Tools</h2><p className="text-gray-500 mt-2">100% Real-Time. No Dummy Buttons.</p></div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><span className="text-blue-600">💱</span> Real-Time Currency</h3>
            <p className="text-sm text-gray-500 mb-4">Convert instantly with live rates.</p>
            <a href="https://api.frankfurter.app/latest?amount=100&from=USD&to=INR" target="_blank" className="block text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Try Demo</a>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border border-purple-100 shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><span className="text-purple-600">🔍</span> AI Deal Finder</h3>
            <p className="text-sm text-gray-500 mb-4">Agent scans Amazon, eBay, AliExpress.</p>
            <a href="https://paypal.me/AbuHamdan978/6" target="_blank" className="block text-center bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">Go Pro</a>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border border-green-100 shadow-sm">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><span className="text-green-600">🏷️</span> Auto Coupon Fetcher</h3>
            <p className="text-sm text-gray-500 mb-4">Get live coupons automatically.</p>
            <a href="https://paypal.me/AbuHamdan978/6" target="_blank" className="block text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">Go Pro</a>
          </div>
        </div>
      </section>

      {/* LIVE PRODUCT STORE */}
      <section id="store" className="py-20 bg-gray-50 max-w-7xl mx-auto px-4">
        <div className="text-center mb-14"><h2 className="text-3xl font-bold">🤖 PilotBot's Daily Finds</h2><p className="text-gray-500 mt-2">Inventory synced from CJ Dropshipping daily.</p></div>
        
        {products.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-2xl border shadow-sm">
            <p className="text-gray-500 font-medium">⏳ Waiting for PilotBot to sync products from CJ...</p>
            <p className="text-xs text-gray-400 mt-2">Make sure to hit the /api/test-add route on your Render backend to test!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover bg-gray-100" loading="lazy"/>
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
        )}
      </section>

      {/* LEGAL PAGES (ADSENSE STRICT) */}
      <section id="legal" className="py-16 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 space-y-10 text-sm text-gray-600">
          <div><h3 className="font-bold text-gray-900 text-lg mb-2">Privacy Policy</h3><p>We collect emails for alerts. Payments via PayPal. Auto-shipped by PilotBot. We use Google AdSense/Analytics.</p></div>
          <div><h3 className="font-bold text-gray-900 text-lg mb-2">Terms of Service</h3><p>Prices include margins. Orders fulfilled automatically via CJ Dropshipping.</p></div>
          <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200"><h3 className="font-bold text-gray-900 text-lg mb-2">Affiliate Disclosure</h3><p>As an Amazon Associate, I earn from qualifying purchases. We also earn margins on dropshipped products.</p></div>
        </div>
      </section>

    </main>
  );
}
