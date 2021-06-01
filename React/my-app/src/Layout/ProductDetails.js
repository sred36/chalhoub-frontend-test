import Swatches from './Swatches'
import ProductDes from './ProductDes';
import ProductSeeMore from './ProductSeeMore';

function ProductDetails(props) {

    function sendImageData(e) {
       console.log(e.target);
       props.sendImageData(e.target)
    }
    return (
    <div className="product__details">
        <h2 className="product__title">{props.productImage.title}</h2>
        <p className="price"> {props.productImage.price}</p>

        <div className="prouct__availabity">
            {props.productImage.sizes} 
        </div>
        <Swatches  productImage={props.productImage} onChildClick={sendImageData}/>
        <ProductDes  productImage={props.productImage}/>
        <ProductSeeMore productImage={props.productImage}/>
    </div>
    );
  }
  
  export default ProductDetails;
