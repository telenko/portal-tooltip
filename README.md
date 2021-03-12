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

      return <PortalTooltip>
        <div>I'm a contents inside a tooltip :) You can use any React components here.</div>
      </PortalTooltip>
  };
```