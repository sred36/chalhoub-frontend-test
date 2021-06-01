
function ProductDes(props) {
    return (
        <div className="product__description">
            <span className="fonts-size--x-small">DESCRIPTION</span>
            <p className="fonts-size--xx-small line-height--normal product__description--content" >{props.productImage.desc}</p>
            <div className="fonts-size--xx-small ">
                <div className="fonts-size--xx-small line-height--normal">shirt sleev</div>
                <div className="fonts-size--xx-small line-height--normal">Tiger emborided sleev</div>
                <div className="fonts-size--xx-small line-height--normal">round neeck</div>
            </div>
    </div>
    );
  }
  
  export default ProductDes;
  