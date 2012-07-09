(function($) {
    $.fn.ssshow = function(params) {
        var defaults = {
            delay: 5000
        };
        var settings = $.extend(defaults, {}, params);
        this.each(function(index, element) {
            $(element).css('position', 'relative').children().css('position', 'absolute').width('100%').height('100%');
            $.ssshow($(element), settings.delay);
        });
        return this;
    };
    $.ssshow = function($element, delay) {
        $element.children().last().delay(delay).fadeOut('slow', function() {
            $(this).prependTo($element).show();
            $.ssshow($element, delay);
        });
    };
})(jQuery);