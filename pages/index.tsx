import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <Head>
        <title>Cyberpunk Gaming News</title>
        <meta name="description" content="Live global and Middle East gaming industry news dashboard." />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-cyan-400 mb-10 animate-pulse">
          ⚡ Gaming Industry Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Global', 'Middle East', 'Esports', 'Industry'].map((section) => (
            <div key={section} className="bg-black bg-opacity-40 border border-purple-700 rounded-2xl p-4 shadow-lg hover:shadow-cyan-500/50 transition duration-300">
              <h2 className="text-xl font-semibold text-pink-400 mb-3 font-orbitron">{section}</h2>
              <p className="text-sm text-gray-300">
                Placeholder content. This will show live news pulled from credible sources globally and in the MENA region.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
