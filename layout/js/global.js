    var product = [
        {img: "images/1.png", title: "Twon headd", price: "AED: 300",sizes: "Available Sizes : S M",desc:"Calendula Herbal Extract Alcohol-Free Toner"},
        {img: "images/6.png", title: "Bangalore tshirt", price: "AED: 400", sizes: "Available Sizes : L XL", desc:"-Moisten a sterile cotton pad with facial toner, and apply to skin in areas where needed, avoiding the eye area        "},
        {img: "images/2.png", title: "Candian  tshirt", price: "AED: 500", sizes: "Available Sizes : S M XL XXL ", desc:"ntains no alcohol or harsh synthetic drying agent"},
        {img: "images/4.png", title: "leather Hoodie", price: "AED: 600", sizes: "Available Sizes : L  XL ", desc:"The calendula petals in our unique formula are still inserted by hand in the Kiehl’s apothecary tradition to"}
    ];

     var $cache = {};
    function initializeCache() {
        $cache.document = $(document);
        $cache.color = $('.product__colors li');
        $cache.swatchImage = $cache.color.find('img');
        $cache.productDetails = $('.product__details');
        $cache.productImage = $(' .product__image img');
        $cache.productTitle =  $cache.productDetails.find('.product__title');
        $cache.productPrice =  $cache.productDetails.find('.price');
        $cache.productAvailbilSize =  $cache.productDetails.find('.prouct__availabity');
        $cache.productDesc =  $cache.productDetails.find('.product__description--content');
        

    
    }
    function initializeEvents() {
        $(document).on('click',  $cache.swatchImage, function(e) {
            e.preventDefault();
            var source = $(e.target).attr('data-source');
            $cache.swatchImage.removeClass('selected');
            $(e.target).addClass('selected');
            if(source) {
                AppendProductDetails(source);
            }
            
        });

    }
    
    function AppendProductDetails(source) {
        product.filter(function(element) {
                 if(element.img === source ) {
                     appendDataToDom(element);
                 }
        });
        
        
    }
    /* Appending the dynamic Data from JSON */
    function appendDataToDom(element) {
        $cache.productImage.attr('src', element.img);
        $cache.productTitle.text(element.title)
        $cache.productPrice.text(element.price)
        $cache.productAvailbilSize.text(element.sizes)
        $cache.productDesc.text(element.desc)

        

    }

$(document).ready(function() {
    initializeCache();
    initializeEvents();
           
});
