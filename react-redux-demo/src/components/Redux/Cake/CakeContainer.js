
import { connect } from 'react-redux';
import { buyCake } from './cakeAction';
import Cake from './Cake';
import TestCom from '../../testCom';


const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Cake);






