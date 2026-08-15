import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Card = (props) => {
    return (


        <div className="card" style={{ width: '25rem' }} >
            <img src={props.imageURL} alt="title" />
        <div className="card-body">
            <h5 className="card-title">{ props.albumTitle}</h5>
                <p className="card-text">
                    {props.albumDescription}
                </p>
                <button href='#' className='btn btn-primary'>
                    {props.buttonText}
                </button>

            </div>
    </div>

    )
}

root.render(<Card />);


export default Card;
