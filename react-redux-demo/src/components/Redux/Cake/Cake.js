import React from 'react'

function Cake(props) {
    return (
        <div >
            <h2>Number Of Cakes:{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>But Cake</button>
        </div>
    )
}

export default Cake;

