import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import './App.css'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const App = () => {
    const [albumList, setAlbumList] = useState([
        {
            artistId: 0,
            artist: 'The Beatles',
            title: 'Yellow Submarine',
            description:'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.',
            year: 1969,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Brqq69vRg6td_VoqmD1sQdLzCTn8KpbmcDp7Bnh0UA&s',
        },
        {
            artistId: 1,
            artist: 'The Beatles',
            title: 'Abbey Road',
            description: 'Yellow Submarine is the tenth studio album by English rock band the Beatles, released on 13 January 1969 in the United States and on 17 January 1969 in the United Kingdom.',
            year: 1969,
            image:"
        },
        {
            artistId: 2,
            artist: 'The Beatles',
            title: 'Let It Be',
            description: "Let It Be is the twelfth and final studio album by the English rock band the Beatles. It was released on 8 May 1970, almost a month after the group's break-up.",
            year: 1970,
            image: 'https://upload.wikimedia.org/wikipedia/en/5/51/TheBeatles-LetItBe%282011VinylReissue%29.png',
        },
    ]);
    const renderedList = () => {
        return albumList.map((album) => {
            return (
                <Card
                    className="profile-avatar"
                    albumTitle={album.title}
                    albumDescription={album.description}
                    imageURL={album.image}
                    buttonText='OK '
                />
            );
        });
    };
    return <div className='container'>{renderedList()}</div>;
};


root.render(<Card />);


export default App;