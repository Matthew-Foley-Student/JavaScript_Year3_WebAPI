import React from 'react';

const OneAlbum = (props) => {
    return (
        <div className="container">
            <h2>Album Details for {props.album.title}</h2>
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <img
                            src={props.album.image}
                            className="card-img-top"
                            alt={props.album.title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.album.title}</h5>
                            <p className="card-text">{props.album.description}</p>
                            <div className='list-group'>
                                <li> Show Album Tracks Here</li>
                            </div>
                            <a href="/#" className="btn btn-primary">
                                Edit Album
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-9'>
                    <div className='card'>
                        <p> Show Lyrics Of The Tracks Here</p>
                    </div>
                    <div className='card'>
                        <p> Show Video From Youtube Here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneAlbum;