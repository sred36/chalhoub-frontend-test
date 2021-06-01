     var $cache = {};
     var productData;
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
        $cache.seeMore =  $('.product__seemore--gallary li img');
        

    
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
        if(productData) {
            productData.filter(function(element) {
                    if(element.img === source ) {
                        appendDataToDom(element);
                    }
            });
        }
        
        
    }
    /* Appending the dynamic Data from JSON */
    function appendDataToDom(element) {
        $cache.productImage.attr('src', element.img);
        $cache.productTitle.text(element.title)
        $cache.productPrice.text(element.price)
        $cache.productAvailbilSize.text(element.sizes)
        $cache.productDesc.text(element.desc);
        updateSeeMoreData(element.seemore);

        

    }

    function updateSeeMoreData(seemoreData) {
        seemoreData.map(function(element,index) {
            $($cache.seeMore[index]).attr('src', element)
        });

    }

    function loadJSONData() {
       var API = "https://api.jsonbin.io/b/60b5c741b104de5acddb7fcf";
       $.ajax({
           type: "GET",
           url: API, 
           dataType: "json",
        success: function(result){
            productData = result;
        },
        error: function(response) {
            console.log(response);
        }
        
    });
   
}
$(document).ready(function() {
    initializeCache();
    initializeEvents();
    loadJSONData();
           
});
