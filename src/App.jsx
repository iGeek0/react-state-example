import { useState } from 'react'
import './App.css'
import Loader from './components/loader/loader'

function App() {
  const [loading, setLoading] = useState(true);
  // {loading && <Loader/>}
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
    <Loader texto="Cargando..." color="azul" />
    <Loader texto="Loading..." color="verde" />
            {
              loading ?
                <Loader /> :
                <>
                  <h1>Titulo</h1>
                  <button className='btn btn-primary'>Click!</button>
                </>
            }
    </>
  )
}

export default App


//  if ternario condicion ? true : false