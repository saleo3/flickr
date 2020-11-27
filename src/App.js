// import Grid from './components/Grid';
// import SearchInput from './components/SearchInput';
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import { useEffect, useState } from 'react';
// import { URL_API } from './helper';
// import { Loader } from 'semantic-ui-react';
import Sidebar from './components/Sidebar';

// function App() {
//   const [searchValue, setSearchValue] = useState('books');
//   const [images, setImages] = useState([]);
//   const [isLoading, setLoading] = useState(false)

//   const fetchData = async () => {
//     setLoading(true);

//     try {
//       let flickrData = await fetch(URL_API + searchValue);
//       let flickrJSON = await flickrData.json();
//       setImages(flickrJSON.photos.photo);
//     } catch (error) {
//       alert(error);
//     }

//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, [])

//   return (
//     <>
//       <Loader content='Loading' active={isLoading} size='massive'/>
//       <SearchInput onChange={setSearchValue} onClick={fetchData}/>
//       <Grid images={images}/>
//     </>
//   );
// }

const chapter1 = {
  id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
  name: 'Chapter 1',
  description:
    'This is the chapter 1 adjhajds asdas dasdas asda asd asdasd asfsdf his is the chapter 1 adjhajds asdas dasdas asda asd his is the chapter 1 adjhajds asdas dasdas asda asd his is the chapter 1 adjhajds asdas dasdas asda asd  This is the chapter 1 adjhajds asdas dasdas asda asd asdasd asfsdf his is the chapter 1 adjhajds asdas dasdas asda asd his is the chapter 1 adjhajds asdas dasdas asda asd his is the chapter 1 adjhajds asdas dasdas asda asd ',
  __typename: 'Chapter',
  connections: [
    {
      id: 'rel-957dff1f-be79-4669-a10c-bd1769a416c7',
      name: 'Arc 2',
      description: 'Relationship with Character1 by Arc2',
      __typename: 'Relationship',
      connectionType: 'Arc connection',
      destNode: {
        id: 'chr-8339188b-7cfe-4a3b-b0ec-edec7338a699',
        __typename: 'Character',
      },
      sourceNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      arc: 'arc-8b963023-8dbe-4177-8e79-a4708e4589bf',
    },
    {
      id: 'rel-a33da363-44d7-4935-9d41-919641836dd8',
      name: null,
      description: 'Relationship with Chapter 2',
      __typename: 'Relationship',
      connectionType: 'Static connection',
      destNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      sourceNode: {
        id: 'chp-31d39650-1bad-4d6a-8311-9d4593fb87f8',
        __typename: 'Chapter',
      },
      arc: null,
    },
    {
      id: 'rel-a33da363-44d7-4935-9d41-919641836dd8',
      name: 'Arc 2',
      description: 'Relationship with Event 1 by Arc 2',
      __typename: 'Relationship',
      connectionType: 'Arc connection',
      destNode: {
        id: 'evt-2965bb22-8b70-4b43-85d2-c0be0b4ed747',
        __typename: 'Event',
      },
      sourceNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      arc: 'arc-8b963023-8dbe-4177-8e79-a4708e4589bf',
    },
    {
      id: 'rel-230b9be6-9991-4d0a-a616-39bd0ec5f317',
      name: 'Arc 2',
      description: 'Relationship with Character2 by Arc 2',
      __typename: 'Relationship',
      connectionType: 'Arc connection',
      destNode: {
        id: 'chr-9cf0883e-03d4-4065-b799-6ef241200d14',
        __typename: 'Character',
      },
      sourceNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      arc: 'arc-8b963023-8dbe-4177-8e79-a4708e4589bf',
    },
    {
      id: 'rel-230b9be6-9991-4d0a-a616-39bd0ec5f317',
      name: null,
      description: 'Static relationship with Character2',
      __typename: 'Relationship',
      connectionType: 'Static connection',
      destNode: {
        id: 'chr-9cf0883e-03d4-4065-b799-6ef241200d14',
        __typename: 'Character',
      },
      sourceNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      arc: null,
    },
    {
      id: 'rel-3f1f0849-1bf1-4947-bc21-603ec85697e5',
      name: 'Arc 1',
      description: 'Relationship with Chapter 3 by Arc 1',
      __typename: 'Relationship',
      connectionType: 'Arc connection',
      destNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      sourceNode: {
        id: 'chp-1493a8a3-7232-4b36-8a5c-646939dfbccc',
        __typename: 'Chapter',
      },
      arc: 'arc-fe6414fb-bd6b-456b-9d7d-2cf5148cd6db',
    },
    {
      id: 'rel-1d24bea9-582e-49d5-abc6-5daaa8fb9fe2',
      name: 'Arc 1',
      description: 'Relationship with Character2 by Arc 1',
      __typename: 'Relationship',
      connectionType: 'Arc connection',
      destNode: {
        id: 'chr-8339188b-7cfe-4a3b-b0ec-edec7338a699',
        __typename: 'Character',
      },
      sourceNode: {
        id: 'chp-3d1188e0-3310-4d83-8b7a-542061912e00',
        __typename: 'Chapter',
      },
      arc: 'arc-fe6414fb-bd6b-456b-9d7d-2cf5148cd6db',
    },
  ],
};

function App() {
  return <Sidebar obj={chapter1} />;
}

export default App;
