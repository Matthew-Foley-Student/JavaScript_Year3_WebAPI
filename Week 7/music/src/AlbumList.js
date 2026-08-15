import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const AlbumList = (props) => {
    const handleSelectionOne = (albumId) => {
        props.onClick(albumId, navigator);
    };
    const navigator = useNavigate();
    const albums = props.AlbumList.map((album) => {
        return (
            <Card
                key={album.Id}
                albumId={album.Id}
                albumTitle={album.title}
                albumDescription={album.description}
                imageURL={album.image}
                buttonText='OK '
                onClick={handleSelectionOne}
            />
        );
    });
    return <div className='container'>{albums}</div>;
};

export default AlbumList;