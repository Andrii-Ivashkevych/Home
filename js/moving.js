/**
 * Created by Ivashkevych on 17.03.2015.
 */
(function (){
    'use strict';

    $(document).ready(function() {

        $("#owl-demo").owlCarousel({
            autoPlay : 3000,
            stopOnHover : true,
            navigation:true,
            paginationSpeed : 1000,
            goToFirstSpeed : 2000,
            singleItem : true,
            autoHeight : true,
            transitionStyle:"fade"
        });

    });

}());