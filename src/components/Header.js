import React from 'react'

function Header(props) {
    const {date, title} = props.props;
    return(
        <div>
            <h1>Enjoy your NASA photo of the day!!!<span role="img" aria-label='go!'>🚀</span>!</h1>
            <h2>{date}</h2>
            <h2>{title}</h2>
        </div>
    )
}

export default Header