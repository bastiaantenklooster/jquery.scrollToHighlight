/*
 *  jquery-scrollToHighlight extension to jquery.scrollTo by Ariel Flesler
 *
 *  Created by Bastiaan ten Klooster
 *  http://www.bastiaan.io
 *
 *  Under MIT License
 */
;(function ($, window, document) {

    "use strict";

    var defaults = {
        highlightClass: 'scroll-to-highlight',
        highlightStopEvent: 'transitionend',
        onAfter: $.noop
    };

    function highlight(target, settings) {
        $(target).addClass(settings.highlightClass);

        $(target).one(settings.highlightStopEvent, function (event) {
            $(event.currentTarget).removeClass(settings.highlightClass);
        });
    }

    $.fn.scrollToHighlight = function (target, duration, options) {
        if (typeof duration === 'object') {
            options = duration;
            duration = 0;
        }
        if (typeof options === 'function') {
            options = { onAfter: options };
        }

        var element = this;
        var settings = $.extend({}, defaults, options);

        duration = duration || settings.duration;

        delete settings.duration;

        return element.each(function () {
            $(element).scrollTo(target, duration, $.extend({}, settings, {
                onAfter: function (target, scrollToSettings) {
                    settings.onAfter.call(this, target, scrollToSettings);
                    highlight(target, scrollToSettings);
                }
            }));
        });
    };

})(jQuery, window, document);
