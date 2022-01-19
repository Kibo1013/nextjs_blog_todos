import Head from "next/head";

export default function Layout({ children, title = "Default title" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="w-screen flex flex-1 justify-center items-center flex-col">
        {children}
      </main>
      <footer className="w-full text-gray-500 text-sm items-center flex h-6 justify-center">
        @Udemy 2021
      </footer>
    </div>
  );
}
