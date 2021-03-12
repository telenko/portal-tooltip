import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom";
/**
 * <PortalTooltip container={ref.current}>
 *     <div>I'm a tooltip header!</div>
 * </PortalTooltip>
 */
//TODO @andrii implement direction
const PortalTooltip = ({ children, container, dx=0, dy=0, direction='left' }) => {
    const [holderEl] = useState<HTMLElement>(() => document.createElement('div'));
    const hide = useCallback(() => {
        holderEl.style.display = 'none';
    }, []);
    const show = useCallback(() => {
        holderEl.style.display = 'block';
    }, []);
    const positionHolder = useCallback((x, y) => {
        holderEl.style.top = `${y + dy}px`;
        holderEl.style.left = `${x + dx}px`
    }, [dy, dx]);
    const handleMouseOut = useCallback(() => {
        hide();
    }, [container]);
    const handleMouseMove = useCallback(e => {
        show();
        positionHolder(e.clientX, e.clientY);
    }, [container]);
    useLayoutEffect(() => {
        holderEl.style.zIndex = '999';
        holderEl.style.position = 'absolute';
        document.body.appendChild(holderEl);
        return () => {
            holderEl.remove();
        };
    }, []);
    useEffect(() => {
        container.addEventListener('mouseout', handleMouseOut);
        container.addEventListener('mousemove', handleMouseMove);
        return () => {
            container.removeEventListener('mouseout', handleMouseOut);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, [container]);
    return createPortal(children, holderEl);
}
export default PortalTooltip;