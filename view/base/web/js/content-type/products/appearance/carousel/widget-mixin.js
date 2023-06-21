define([
    'jquery',
    'mage/utils/wrapper',
    'slick'
], function ($, wrapper) {
    'use strict';

    return function (sliderWidget) {
        return wrapper.wrap(sliderWidget, function (originalSliderWidgetFunction, config, sliderElement) {
            originalSliderWidgetFunction(config, sliderElement);

            const $element = $(sliderElement),
                $carouselElement = $($element.children());

            if ($element.data('slides-to-show') !== undefined && $element.data('slides-to-show').toString() !== '')  {
                $carouselElement.slick(
                    'slickSetOption',
                    'slidesToShow',
                    parseInt($element.data('slides-to-show')),
                    false
                );
            }

            if ($element.data('slides-to-scroll') !== undefined && $element.data('slides-to-scroll').toString() !== '') {
                $carouselElement.slick(
                    'slickSetOption',
                    'slidesToScroll',
                    parseInt($element.data('slides-to-scroll')),
                    true
                );
            }
        });
    };
});
