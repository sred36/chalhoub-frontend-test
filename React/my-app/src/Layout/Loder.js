
import loader from '../images/loader.gif';
function Loader(props) {
    return (
        props.enabled ? <img src={loader} /> : null
    );
  }
  
  export default Loader;
  