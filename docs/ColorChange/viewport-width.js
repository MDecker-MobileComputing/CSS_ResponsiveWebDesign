"use strict";

/**
 * Just include this script in your HTML file to display the current viewport width in a paragraph element.
 *
 * Include it using the following code in your HTML file's <head> section:
 * <script src="viewport-width.js" defer></script>
 *
 * Attribute "defer" is important to ensure that the script runs after the
 * HTML document has been fully parsed.
 */


let paragraphViewportWidth = null;


/**
 * Creates a paragraph element to display the current viewport width and adds it to the document body.
 * Also sets up an event listener for window resize events to update the displayed viewport width.
 */
window.addEventListener( "load", function () {

    paragraphViewportWidth = document.createElement( "p" );

    document.body.appendChild( paragraphViewportWidth );

    window.addEventListener( "resize", showViewportWidth );

    showViewportWidth();
});


/**
 * Displays the current viewport width in the paragraph element.
 */
function showViewportWidth() {

    const viewportWidth = window.innerWidth;

    paragraphViewportWidth.textContent =
            `Current viewport width: ${viewportWidth}px`;
}
