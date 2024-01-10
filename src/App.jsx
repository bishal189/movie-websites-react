import MovieList from './component/MovieList/MovieList'
import './App.css'
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'
import Navbar from './component/navbar/Navbar'
function App() {
  return (
    <>
    <div className="app">
    <Navbar/>
    < MovieList type="popular" title="Popular" emoji={Fire}/>
    < MovieList type="top_rated" title="star" emoji={Star}/>
    < MovieList type="upcoming" title="Upcoming" emoji={Party}/>
    </div>
      
    </>
  )
}

export default App
