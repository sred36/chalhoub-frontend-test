
import swatchBlue from '../images/blue.png';
import swatchRed from '../images/red-s.png';
import swatchGreen from '../images/green-s.png';
import swatchSky from '../images/sky-s.png';

const swatchesData = [
    swatchBlue,
    swatchRed,
    swatchGreen,
    swatchSky
];


function Swatches(props) {
    return (
        <div className="product__colors">
            Colors:
            <ul className="flex product__colors-section">
                {swatchesData.map((value,index) =>
                <li className={'swatch'+index} key={'swach'+index}>
                    <img className={props.productImage.img === 'images/'+ index +'.png' ? 'selected' : ''} src={value} id={'images/'+ index +'.png'} width="40" height="40" onClick={props.onChildClick}/>
                </li>
                )}
            </ul>

        </div>
    );
  }
  
  export default Swatches;
  