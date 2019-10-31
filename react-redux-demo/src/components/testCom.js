// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class testCom extends Component {

//     render() {

//         return (
//             <div>
//                 <h2>Quantity of Cakes:{this.props.data}</h2>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         data: state.numOfCakes
//     }
// }

// export default connect(mapStateToProps)(testCom);


import React from 'react'
import { useSelector } from 'react-redux'

function TestCom() {
    const data = useSelector(state => state.numOfCakes);
    return (
        <div>
            <h2>
                hook data{data}
            </h2>
        </div>
    )
}

export default TestCom;

