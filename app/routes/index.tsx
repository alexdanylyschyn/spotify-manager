import { Link } from "remix";

export default function Index() {
  return (
    <main className="relative min-h-screen mt-8 bg-white">
      <section className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-16 space-y-4 shadow-2xl rounded-xl bg-slate-600 h-96">
          <h1 className="text-4xl font-bold text-center text-white">spotify manager</h1>
          <span className="text-lg text-white">Lorem ipsum dollor sit amet.</span>
        </div>
      </section>
    </main>
  );
}
