import { useEffect, useState } from "react";
import styled from "styled-components";
import Movies from "./Movies";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=524a722bdd41b351ba720f6846b5dab6`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=524a722bdd41b351ba720f6846b5dab6&query=`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5%;
    padding: 5% 2%;
    background: rgb(9, 0, 26);
`
function App() {
      
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(()=>{
      fetch(FEATURED_API)
      .then(res=> res.json())
      .then(data =>{
          setMovies(data.results)
          console.log(data)
      })
  },[])

  const handlesubmit = (e) => {
    e.preventDefault()
      fetch(SEARCH_API + searchTerm)
      .then(res=> res.json())
      .then(data =>{
          setMovies(data.results)
          console.log(data)
      })

      console.log(searchTerm)
  }

  const setVoteClass = (vote) => {
    if(vote >= 8){
      return 'green'
    }else if(vote >= 6){
      return 'orange'
    }else{
      return 'red'
    }
  }

  return (
    <>
    <nav>
      <h1>MOVIEMANIA</h1>
      <form action="" onSubmit={handlesubmit}>
        <input type="search" placeholder="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      </form>
    </nav>
      <Container className="App">
      {movies.length > 0 && movies.map((movie)=>(<Movies key={movie.id} {...movie} setVoteClass={setVoteClass} />))}
      </Container>
    </>
  );
}

export default App;
