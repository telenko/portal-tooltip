# Simple component for attaching React contents as tooltip to native DOM elements
```HTML
<html>
    ...
    <body>
        <div id='root'></div>
        <div id='hover-container'>You can hover here</div>
    </body>
</html>
```

```Javascript
  import { useMemo } from 'react';
  import PortalTooltip from '@telenko/portal-tooltip';

  const Example: React.FC = () => {
      const container = useMemo(() => document.getElementById('hover-container'), []);

      return <PortalTooltip container={container}>
        <div>I'm a contents inside a tooltip :) You can use any React components here.</div>
      </PortalTooltip>
  };
```

# Positioning
```Javascript
  //left to cursor
  <PortalTooltip container={container} direction='left'>...</PortalTooltip>
  //right to cursor
  <PortalTooltip container={container} direction='right'>...</PortalTooltip>
  //top to cursor
  <PortalTooltip container={container} direction='top'>...</PortalTooltip>
  //bottom to cursor
  <PortalTooltip container={container} direction='bottom'>...</PortalTooltip>
  //manual position
  <PortalTooltip container={container} dx={20} dy={-200}>...</PortalTooltip>
  //mixed position
  <PortalTooltip container={container} direction='right' dx={20}>...</PortalTooltip>
```