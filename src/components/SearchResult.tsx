"use client";

import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import PokemonPanel from "@/components/PokemonPanel";
import { Pokemon } from "@/types/pokemon";
import { GET_POKEMON } from "@/graphql/queries";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const name = searchParams.get("q")?.trim() || "";

  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON, {
    variables: { name },
    skip: !name,
  });

  return (
    <div>
      {!name && (
        <p className="text-gray-500 mt-4">
          Please enter a Pokémon name to search.
        </p>
      )}
      {loading && <p className="text-gray-500 mt-4">Loading Pokémon: {name}</p>}
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {!loading && !error && data?.pokemon && (
        <PokemonPanel pokemon={data.pokemon} />
      )}
      {!loading && !error && !data?.pokemon && name && (
        <p className="text-gray-500 mt-4">No Pokémon found named: {name}</p>
      )}
    </div>
  );
}
