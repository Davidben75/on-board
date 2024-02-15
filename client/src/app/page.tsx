import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-screen-md mx-auto p-6">
    <section className="text-center">
    <h1 className="font-bold text-3xl mb-4">Welcome to On-Board</h1> 
    <a className="inline-block  bg-indigo-500 rounded-full px-6 py-3 mx-auto text-white text-center" href="/recipe/new">
        Create your Recipe
    </a>
    </section>
   
</main>
  );
}
