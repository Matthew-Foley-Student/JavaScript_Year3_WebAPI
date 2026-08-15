import React from 'react';

const NewAlbum = () => {
    return (
        <div className='container'>
            <form>
                <h1>Create An Album</h1>
                <div className='form-group'>
                    <label for='exampleInuptEmail'>Email Adress</label>
                    <input
                        type='email'
                        class='form-control'
                        id='exampleInputEmail'
                        aria-describedy='emailHelp'
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                        we Promise That We Wont Totes Share Private Emails
                    </small>
                </div>
                <div className='form-group'>
                    <label for='exampleInputPassword'>Password</label>
                    <input
                        type='password'
                        class='form-control'
                        id='exampleInputPassword'
                    />
                </div>
                <div className='form-group form-check'>
                    <input type='checkbox' class='form-check-input' id='exampleCheck' />
                    <label class='form-check-label' for='exampleCheck'>
                        Check This Thing Out The Thing Right Here
                    </label>
                </div>
                <button type='submit' class='btn btn-primary'>
                    Submit Button
                </button>
            </form>
        </div>
    );
};

export default NewAlbum;