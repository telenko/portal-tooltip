import React from 'react';

import PortalTooltip from './PortalTooltip';

export default {
  title: 'PortalTooltip',
  component: PortalTooltip
};

const hoverer = document.createElement('div');
hoverer.innerHTML = 'Hover over me :)';
hoverer.style.padding = '50px';
hoverer.style.border = '1px solid #eee';
hoverer.style.position = 'fixed';
hoverer.style.top = '100px';
document.body.appendChild(hoverer);

const Template = (args) => <PortalTooltip {...args} ><div>I'm a tooltip</div></PortalTooltip>;

export const Tooltip = Template.bind({});
Tooltip.args = {
  container: hoverer,
};