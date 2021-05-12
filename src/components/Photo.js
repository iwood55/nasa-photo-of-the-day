import React from 'react'

function PhotoOfTheDay(props) {
    const {url} = props;
    return(
        <img src = {url} alt = 'NASA POTD'/>
    )
}

export default PhotoOfTheDay