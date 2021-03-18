import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom";
/**
 * <PortalTooltip container={ref.current}>
 *     <div>I'm a tooltip header!</div>
 * </PortalTooltip>
 */
const PortalTooltip = ({ children, container, dx=0, dy=0, direction='right' }) => {
    const [holderEl] = useState(() => document.createElement('div'));
    const hide = useCallback(() => {
        holderEl.style.display = 'none';
    }, []);
    const show = useCallback(() => {
        holderEl.style.display = 'block';
    }, []);
    const holderRects = useCallback(() => {
        return holderEl.getBoundingClientRect();
    }, []);
    const positionDx = useCallback(() => {
        switch (direction) {
            case 'right': {
                return 0;
            }
            case 'left': {
                const { width } = holderRects();
                return -width;
            }
            case 'top': {
                const { width } = holderRects();
                return -width/2;
            }
            case 'bottom': {
                const { width } = holderRects();
                return -width/2;
            }
        }
        return 0;
    }, [direction, holderEl]);
    const positionDy = useCallback(() => {
        switch (direction) {
            case 'right': {
                return 0;
            }
            case 'left': {
                return 0;
            }
            case 'top': {
                const { height } = holderRects();
                return -height;
            }
            case 'bottom': {
                const { height } = holderRects();
                return height;
            }
        }
        return 0;
    }, [direction, holderEl])
    const positionHolder = useCallback((x, y) => {
        holderEl.style.top = `${y + dy + window.scrollY + positionDy(y)}px`;
        holderEl.style.left = `${x + dx + window.scrollX + positionDx(x)}px`
    }, [dy, dx, direction]);
    const handleMouseOut = useCallback(() => {
        hide();
    }, [container]);
    const handleMouseMove = useCallback(e => {
        show();
        positionHolder(e.clientX, e.clientY);
    }, [container, dy, dx, direction]);
    useLayoutEffect(() => {
        holderEl.style.zIndex = '999';
        holderEl.style.position = 'absolute';
        document.body.appendChild(holderEl);
        return () => {
            holderEl.remove();
        };
    }, []);
    useEffect(() => {
        container.addEventListener('mouseleave', handleMouseOut);
        container.addEventListener('mousemove', handleMouseMove);
        return () => {
            container.removeEventListener('mouseleave', handleMouseOut);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [container, handleMouseOut, handleMouseMove]);
    return createPortal(children, holderEl);
}
export default PortalTooltip;