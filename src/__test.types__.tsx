import React, { useMemo } from 'react';
import PortalTooltip from './PortalTooltip';

const TestComponent: React.FC = () => {
    const container = useMemo(() => document.getElementById('test'), []);
    return <>
    <PortalTooltip container={container} direction='left'>
        I'm a tooltip
    </PortalTooltip>
    <PortalTooltip container={container} direction='right'>
        I'm a tooltip
    </PortalTooltip>
    <PortalTooltip container={container} direction='top'>
        I'm a tooltip
    </PortalTooltip>
    <PortalTooltip container={container} direction='bottom'>
        I'm a tooltip
    </PortalTooltip>
    <PortalTooltip container={container} direction='left' dx={30} dy={30}>
        I'm a tooltip
    </PortalTooltip>
    </>
}