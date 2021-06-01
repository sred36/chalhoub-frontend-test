function Search() {
    return (
    <div className="product__search">
        <form className="product__search--form">
            <input type="search" name="search" placeholder="SEARCH" className="width--100 product__search--control" />
            <button type="submit" className="product__search--button"><i className="fa fa-search"></i></button>
        </form>
    </div>
    );
  }
  
  export default Search;
  