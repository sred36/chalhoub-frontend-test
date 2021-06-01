import ProductTile from '../images/0.png'
import ProductTile1 from '../images/1.png'
import ProductTile2 from '../images/2.png'
import ProductTile3 from '../images/3.png'
import ProductTile4 from '../images/4.png'
import ProductTile5 from '../images/5.png'
import ProductTile6 from '../images/6.png'

const ProductTileData = [
    {url: ProductTile, price: "$200" },
    {url: ProductTile1, price: "$300" },
    {url: ProductTile2, price: "$400" },
    {url: ProductTile3, price: "$500" },
    {url: ProductTile4, price: "$600" },
    {url: ProductTile5, price: "$700" },
    {url: ProductTile6, price: "$800" }
]


function Kids() {
    return (
      <div className="product__tile text-align--center">
          <ul className="flex justify-align--between">
                {ProductTileData.map((value,index) =>
                <li className={'product__tile'+index} key={'product__tile'+index}>
                    <img src={value.url} />
                    <div className="product__tile--price">{value.price}</div>
                </li>
                )}
            </ul>
     
      </div>
    );
  }
  
  export default Kids;
  