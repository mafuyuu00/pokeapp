import { useState, useEffect } from 'react'
import './App.css'
import { Card } from 'react-bootstrap'

function App() {
  const [pokemon, setPokemon] = useState(null)

  const buscarPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/arceus"
    )

    const data = await response.json()

    setPokemon(data)

    console.log(data)
  }

  useEffect(() => {
    buscarPokemon()
  }, [])

  if (!pokemon) {
    return <p>Cargando...</p>
  }

return (
  <Card>
    <Card.Body>

      <Card.Img
        className="pokemon-img"
        src={pokemon.sprites.other.showdown.front_default}
      />

      <Card.Title>
        Nombre: {pokemon.name}
      </Card.Title>

      <Card.Text>
        ID: {pokemon.id}
      </Card.Text>

      <Card.Text>
        Peso: {pokemon.weight / 10} kg
      </Card.Text>

      <Card.Text>
        Altura: {pokemon.height / 10} m
      </Card.Text>

      <Card.Text>
        Tipo:
      </Card.Text>

      <div className="types">
        {pokemon.types.map((tipo) => (
          <span
            key={tipo.slot}
            className={`type ${tipo.type.name}`}
          >
            {tipo.type.name}
          </span>
        ))}
      </div>

      <Card.Text>
        Habilidades:
      </Card.Text>

      <div className="abilities">
  {pokemon.abilities.map((habilidad) => (
    <span
      key={habilidad.slot}
      className={habilidad.ability.name}
    >
      {habilidad.ability.name}
    </span>
  ))}
</div>

    </Card.Body>
  </Card>
)
}

export default App
