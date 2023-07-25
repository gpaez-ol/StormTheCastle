import * as React from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps<T extends HTMLElement> = {
    containerRef?: React.RefObject<T>;
};

function ScrollToTop<T extends HTMLElement>(props: ScrollToTopProps<T>) {
    const { containerRef } = props;
    const { pathname } = useLocation();

    React.useEffect(() => {
        const containerNode = containerRef?.current ?? window;
        containerNode.scrollTo(0, 0);
    }, [pathname, containerRef]);

    return null;
}

export { ScrollToTop };
