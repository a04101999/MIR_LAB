/**
 * Javascript-Equal-Height-Responsive-Rows
 * https://github.com/Sam152/Javascript-Equal-Height-Responsive-Rows
 */
(function(jQuery) {
    jQuery.fn.equalHeight = function() {
        var heights = [];
        jQuery.each(this, function(i, element) {
            jQueryelement = jQuery(element);
            var element_height;
            var includePadding = (jQueryelement.css('box-sizing') == 'border-box') || (jQueryelement.css('-moz-box-sizing') == 'border-box');
            if (includePadding) {
                element_height = jQueryelement.innerHeight();
            } else {
                element_height = jQueryelement.height();
            }
            heights.push(element_height);
        });
        this.height(Math.max.apply(window, heights));
        return this;
    };
    jQuery.fn.equalHeightGrid = function(columns) {
        var jQuerytiles = this;
        jQuerytiles.css('height', 'auto');
        for (var i = 0; i < jQuerytiles.length; i++) {
            if (i % columns === 0) {
                var row = jQuery(jQuerytiles[i]);
                for (var n = 1; n < columns; n++) {
                    row = row.add(jQuerytiles[i + n]);
                }
                row.equalHeight();
            }
        }
        return this;
    };
    jQuery.fn.detectGridColumns = function() {
        var offset = 0,
            cols = 0;
        this.each(function(i, elem) {
            var elem_offset = jQuery(elem).offset().top;
            if (offset === 0 || elem_offset == offset) {
                cols++;
                offset = elem_offset;
            } else {
                return false;
            }
        });
        return cols;
    };
    jQuery.fn.responsiveEqualHeightGrid = function() {
        var _this = this;

        function syncHeights() {
            var cols = _this.detectGridColumns();
            _this.equalHeightGrid(cols);
        }
        jQuery(window).bind('resize load', syncHeights);
        syncHeights();
        return this;
    };
})(jQuery);

jQuery(function(jQuery) {
    jQuery('.equalcol').responsiveEqualHeightGrid();
});






jQuery(function() {
    jQuery('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});





jQuery(document).ready(function() {
    jQuery("pre.htmlCode").snippet("html", {
        style: "ide-codewarrior"
    });
    jQuery("pre.styles").snippet("css", {
        style: "ide-codewarrior"
    });
    jQuery("pre.js").snippet("javascript", {
        style: "ide-codewarrior",
        transparent: true,
        showNum: false
    });
});