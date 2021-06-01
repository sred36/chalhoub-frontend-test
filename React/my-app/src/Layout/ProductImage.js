
function ProductImage(props) {
    const imagePath  = props.productImage.img && require(`../${props.productImage.img}`);
    const imageLatest = imagePath ? imagePath.default : null;
    return (
        <div className="product__image">
          {
          props.productImage.img && 
          <img src={imageLatest} />
        }
            
        </div>
    );
  }
  
  export default ProductImage;
  