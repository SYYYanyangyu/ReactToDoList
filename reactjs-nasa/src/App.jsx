import React, { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchData() {
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try {
        const response = await fetch(url)
        const apiData = await response.json()
        setData(apiData)
        console.log('DATA\n', apiData)
      } catch (err) { console.log(err) }
    }

    fetchData()
  }, [])

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} />
      )}
    </>
  )
}

export default App
