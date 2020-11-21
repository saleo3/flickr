import Grid from './components/Grid'
import SearchInput from './components/SearchInput'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react';
import { URL_API } from './helper'
import { Loader } from 'semantic-ui-react';

function App() {
  const [searchValue, setSearchValue] = useState('books');
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true);

    try {
      let flickrData = await fetch(URL_API + searchValue);
      let flickrJSON = await flickrData.json();
      setImages(flickrJSON.photos.photo);
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Loader content='Loading' active={isLoading} size='massive'/>
      <SearchInput onChange={setSearchValue} onClick={fetchData}/>
      <Grid images={images}/>
    </>
  );
}



export default App;
