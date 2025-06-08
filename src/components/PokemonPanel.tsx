import { Pokemon } from "../types/pokemon";
import Image from "next/image";
import Link from "next/link";

export default function PokemonPanel({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 mt-4">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          {pokemon.name}
        </h2>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={150}
          height={150}
          priority
          className="mb-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
        <p>
          <strong>Number:</strong> {pokemon.number}
        </p>
        <p>
          <strong>Classification:</strong> {pokemon.classification}
        </p>
        <p data-testid="pokemon-types">
          <strong>Types:</strong> {pokemon.types.join(", ")}
        </p>

        <p>
          <strong>Resistant:</strong> {pokemon.resistant.join(", ")}
        </p>
        <p>
          <strong>Weaknesses:</strong> {pokemon.weaknesses.join(", ")}
        </p>
        <p>
          <strong>Flee Rate:</strong> {pokemon.fleeRate}
        </p>
        <p>
          <strong>Max CP:</strong> {pokemon.maxCP}
        </p>
        <p>
          <strong>Max HP:</strong> {pokemon.maxHP}
        </p>
        <p>
          <strong>Height:</strong> {pokemon.height.minimum} -{" "}
          {pokemon.height.maximum}
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight.minimum} -{" "}
          {pokemon.weight.maximum}
        </p>
        {pokemon.evolutionRequirements && (
          <p>
            <strong>Evolution Req:</strong>{" "}
            {pokemon.evolutionRequirements.amount}{" "}
            {pokemon.evolutionRequirements.name}
          </p>
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-indigo-600 mb-1">Fast Attacks</h3>
        <ul className="list-disc list-inside text-gray-700">
          {pokemon.attacks.fast.map((atk, i) => (
            <li key={i}>
              {atk.name} ({atk.type}) - {atk.damage}
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-indigo-600 mt-3 mb-1">
          Special Attacks
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {pokemon.attacks.special.map((atk, i) => (
            <li key={i}>
              {atk.name} ({atk.type}) - {atk.damage}
            </li>
          ))}
        </ul>
      </div>

      {pokemon.evolutions && (
        <div className="mt-4">
          <h3 className="font-semibold text-indigo-600 mb-2">Evolutions</h3>
          <div className="flex flex-wrap gap-6 mt-3 text-gray-700">
            {pokemon.evolutions.map((evo) => (
              <Link
                key={evo.id}
                href={`/pokemon/${evo.name}`}
                className="cursor-pointer hover:scale-105 transition-transform block text-center"
              >
                <Image
                  src={evo.image}
                  alt={evo.name}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <p className="text-sm font-medium">{evo.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
