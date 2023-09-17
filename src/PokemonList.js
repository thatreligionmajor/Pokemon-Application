import React from 'react';

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(pokeName => (
                <div key={pokeName}>{pokeName}</div>
            ))}
        </div>
    )
}