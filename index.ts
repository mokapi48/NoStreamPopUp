/*
 * NoStreamPopUp
 * Hides the floating picture-in-picture window that shows
 * a stream preview — yours or anyone else's.
 */

import definePlugin from "@utils/types";

const STYLE_ID = "vc-no-stream-popup";

const css = `
[class*="pictureInPictureWindow_"] {
    display: none !important;
}
`;

export default definePlugin({
    name: "NoStreamPopUp",
    description: "Hides the floating stream preview window (yours and others').",
    authors: [{ name: "you", id: 0n }],

    start() {
        const style = document.createElement("style");
        style.id = STYLE_ID;
        style.textContent = css;
        document.head.appendChild(style);
    },

    stop() {
        document.getElementById(STYLE_ID)?.remove();
    },
});