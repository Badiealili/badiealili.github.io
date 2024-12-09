import { useEffect } from "react";

export default function useMasonryEffect(images) {
    // Masonry display:
    const ROWS_HEIGHT = 10;
    const ROWS_GAP = 16;
    useEffect(() => {
        const countRows = (child, childImg) => {
            const rowsCount = Math.ceil(
                (childImg.getBoundingClientRect().height + ROWS_GAP) /
                    (ROWS_GAP + ROWS_HEIGHT),
            );
            child.style.gridRowEnd = "span " + rowsCount;
        };

        const masonryDisplayEffect = () => {
            const children =
                document.getElementsByClassName("gallery")[0].children;
            [...children].map((child) => {
                const childImg = child.querySelector("img");
                if (childImg.complete) {
                    countRows(child, childImg);
                } else {
                    childImg.addEventListener("load", () => {
                        countRows(child, childImg);
                    });
                }
            });
        };
        masonryDisplayEffect();
        window.addEventListener("resize", masonryDisplayEffect);
        return () => {
            window.removeEventListener("resize", masonryDisplayEffect);
        };
    }, [images]);
}
