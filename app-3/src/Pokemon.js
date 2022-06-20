import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Pokemon = (props) => {
  const location = useLocation();
  const { page } = location.state;
  console.log(page);
  const { name } = props;
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${page}`).then((res) => {
      setPokemon(res.data);
    });
  }, [page]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
    </div>
  );
};
export default Pokemon;
