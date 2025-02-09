function App() {
  return (
    <section className="grid  place-items-center min-h-svh">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl text-center">Vet</h1>
        <p className="w-3/4 mx-auto text-center">Never buy products from an unverified vendor again.</p>
        <button type="button" className="bg-black shadow-sm flex items-center gap-2  font-medium w-fit px-6 mx-auto rounded-4xl h-12 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="216" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>Sign in with Instagram</button>
      </div>
    </section>
  )
}

export default App
