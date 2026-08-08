import React from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const SearchAlbum = (props) => {
    return (
        <div className="container">
            <SearchForm onSubmit={props.updateSearchResults} />
            <AlbumList AlbumList={props.albumList} onClick={props.updateSingleAlbum} />
        </div>
    );
};

export default SearchAlbum;