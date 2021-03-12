import type { FC } from 'react';

export type PortalTooltipProps = {
    children: any,
    container: HTMLElement,
    direction?: "left" | " right",
    dx?: number,
    dy?: number
};

declare const PortalTooltip: FC<PortalTooltipProps>;

export default PortalTooltip;