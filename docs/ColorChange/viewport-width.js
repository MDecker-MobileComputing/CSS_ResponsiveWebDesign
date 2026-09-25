"use strict";

let paragraphViewportWidth = null;


window.addEventListener( "load", function () {

    paragraphViewportWidth = document.getElementById( "paragraph-viewport-width" );
    if ( paragraphViewportWidth === null ) {

        console.error( "Paragraph element not found!" );
        return;
    }

    window.addEventListener( "resize", showViewportWidth );
});


/**
 * Displays the current viewport width in the paragraph element.
 */
function showViewportWidth() {

    const viewportWidth = window.innerWidth;
    console.log( `Viewport width: ${viewportWidth}px` );

    paragraphViewportWidth.textContent = `Viewport width: ${viewportWidth}px`;
}
