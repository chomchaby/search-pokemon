import { notFound } from "next/navigation";
import { getClient } from "@/libs/server-apollo-client";
import { GET_POKEMON } from "@/graphql/queries";
import PokemonPanel from "@/components/PokemonPanel";
import { Pokemon } from "@/types/pokemon";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const client = getClient();
  const { data } = await client.query<{ pokemon: Pokemon }>({
    query: GET_POKEMON,
    variables: { name: name },
  });

  if (!data?.pokemon) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={<div>Loading search bar...</div>}>
        <SearchBar></SearchBar>
      </Suspense>
      <PokemonPanel pokemon={data.pokemon} />
    </main>
  );
}

// Option 1: Static-only, no fallback
// export async function generateStaticParams() {...}

// Option 2: Hybrid SSG + SSR fallback
// Pre-build selected pages
export async function generateStaticParams() {
  return [
    { name: "Pikachu" },
    { name: "Bulbasaur" },
    { name: "Charmander" },
    { name: "Squirtle" },
    { name: "Eevee" },
    { name: "Jigglypuff" },
    { name: "Meowth" },
    { name: "Psyduck" },
    { name: "Snorlax" },
    { name: "Gengar" },
    { name: "Dragonite" },
    { name: "Mewtwo" },
    { name: "Lucario" },
    { name: "Charizard" },
  ];
}
// Dynamically render others on request
export const dynamicParams = true;

// Option 3: Always SSR (every request, no caching)
// export const dynamic = "force-dynamic";
