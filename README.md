# jQuery.scrollToHighlight

An extension wrapper for flesler/jquery.scrollTo to highlight the target element.

Highlighting happens after the default `onAfter` callback option.

Notice: By default scrolling is instant, as the default `duration` option value is `0`.

## Dependencies

-   jQuery.js library
-   jQuery.scrollTo.js [https://github.com/flesler/jquery.scrollTo]

## Usage

`$(element).scrollTo(target[,duration][,settings]);`

### *element*

This must be a scrollable element, to scroll the whole window use $(window).

### *target*

Read more at [https://github.com/flesler/jquery.scrollTo#target]

### *options*

An object containing options for the plugin:

-   highlightClass: Use this class to add an animation or transition to highlight the *element*. Default is `scroll-to-highlight`
-   highlightStopEvent: When this event gets triggered, the highlighting will end. Default is `transitionend`
-   Any options applicable to `jQuery.scrollTo()`. See [https://github.com/flesler/jquery.scrollTo#settings]

## License

Copyright 2017 Bastiaan ten Klooster

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
