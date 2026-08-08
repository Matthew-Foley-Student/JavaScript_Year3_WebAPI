import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import './App.css';
import SearchForm from './SearchForm';
import dataSource from './dataSource';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);



const App = (props) => {
    const [albumList, setAlbumList] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState('');

    let refresh = false;

    useEffect(() => {
        loadAlbums();
    }, [refresh]);

    const loadAlbums = async () => {
        const response = await dataSource.get('/albums');
        setAlbumList(response.data);
    };

  const renderedList = () => {
        return albumList.map((album) => {
            if (
                album.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
                searchPhrase === ''
            )
                return (
                    <Card
                        key={album.id}
                        albumId={album.id}
                        albumTitle={album.title}
                        albumDescription={album.description}
                        buttonText='OK'
                        imageURL={album.image}
                    />
                );
            else console.log('No match found');
        });
    };



    const updateSearchResults = (phrase) => {
        setSearchPhrase(phrase);
    }

  

    return (
        <div>
            <div className='container'>
            <SearchForm onSubmit={updateSearchResults}/>
            </div>              
            <div className='container'>{renderedList()}</div>

        </div>
    );

};




root.render(<Card />);


export default App;