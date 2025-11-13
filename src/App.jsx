import Header from './componants/Header.jsx'
import MIDSEK from './componants/midsec.jsx'
import Footer from './componants/FOOTER.jsx'
import Album from './componants/album.jsx'
import { useState, useRef } from 'react'
import { userglobal } from './userinfo.jsx'

function App() {

  const [user, setuser] = useState(null);
  const sinp = useRef(null);
  const [fav, setfav] = useState([]);


  return (
    <userglobal.Provider value={{ user, setuser, sinp , fav,setfav}}>
      <>
        <Header />
        <Album />
        <MIDSEK />
        <Footer />
      </>
    </userglobal.Provider>
  )
}

export default App
