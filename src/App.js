import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setLoading(false)
      setNextPageUrl(response.data.next)
      setPreviousPageUrl(response.data.previous)
      setPokemon(response.data.results.map(pokeName => pokeName.name))
  })
  return () => 
    cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  
  function gotoPreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
      />
    </>
  );
}

export default App;
