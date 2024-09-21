import React from 'react'

export default function Footer(props) {

    const { showModal, handleToggleModal, data } = props

    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h2>
                    {data?.title}
                </h2>
                <h1>
                    APOD Projec
                </h1>
            </div>
            <div>
                <button onClick={() => handleToggleModal()}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </div>
        </footer>
    )
}
