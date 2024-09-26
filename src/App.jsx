import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from './components/main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'


function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchDATA() {
      const Nase_Key = import.meta.env.VITE_NASA_API_KEY
    
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${Nase_Key}`
      const today = (new Date().toDateString)
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {

        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        return 
        
      }
      localStorage.clear()
    
      

      try {
        const res = await fetch(url)
        const apiData = await res.json()

        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log(`DATA\n`, apiData)
        

      } catch (err) {
        console.log(err.message)
      }
     
      }

     fetchDATA()
    
  }, [])

   return (
     <>
       
       {data ? (<Main data={data} />) :
         (<div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModal && (
        <SideBar data={data} handleModal={handleModal} />
      )}
      {data && (
        <Footer data={data} handleModal={handleModal} />
      )}
    </>
  )
}

export default App




