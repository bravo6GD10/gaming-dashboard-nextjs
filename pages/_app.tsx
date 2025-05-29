import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gaming Industry Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">🎮 Gaming Industry Dashboard</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          Live updates on esports, gaming media, and the global industry. 🚀
        </p>
      </main>
    </>
  );
}
