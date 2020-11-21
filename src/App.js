import Grid from './components/Grid'
import SearchInput from './components/SearchInput'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react';
import { URL_API } from './helper'

function App() {
  const [searchValue, setSearchValue] = useState('books');
  const [images, setImages] = useState([]);

  const fetchData = async() => {
    let flickrData = await fetch(URL_API + searchValue);
    let flickrJSON = await flickrData.json();
    setImages(flickrJSON.photos.photo);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <SearchInput onChange={setSearchValue} onClick={fetchData}/>
      <Grid images={images}/>
    </>
  );
}



export default App;
