export const SeeMoreImage = (props) => {
    const imagePath  = props.source && require(`../${props.source}`);
    const imageLatest = imagePath ? imagePath.default : null;
    return <img src={imageLatest} height="100"/>

}
function ProductSeeMore(props) {
    const seeMoreImages  = props.productImage.seemore;
    return (
        <div className="product__seemore">
           <h5>SEE MORE PRODUCTS</h5>
            <ul className="product__seemore--gallary flex ">
                {
                seeMoreImages && seeMoreImages.map((value,index) =>
                <li key={'seemore'+index}>
                    <SeeMoreImage source={value}/>
                </li>
                )
                
                }
            </ul>

        </div>
    );
  }
  
  export default ProductSeeMore;
  