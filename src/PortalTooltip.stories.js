import React from 'react';
import PortalTooltip from './PortalTooltip';

export default {
  title: 'PortalTooltip',
  component: PortalTooltip,
  argTypes: {
    direction: {
        control: {
            type: 'select',
            options: ['left', 'right', 'top', 'bottom'],
        },
    },
    dx: {
      control: {
        type: 'number'
      }
    },
    dy: {
      control: {
        type: 'number'
      }
    }
  },
};

// hover container --- start
document.getElementById('hoverer')?.remove();
const hoverer = document.createElement('div');
hoverer.setAttribute('id', 'hoverer');
hoverer.innerHTML = 'Hover over me :)';
hoverer.style.padding = '55px';
hoverer.style.border = '1px solid #eee';
hoverer.style.position = 'absolute';
document.getElementById('docs-root').appendChild(hoverer);
// hover container --- end

const Template = (args) => <PortalTooltip {...args} >
                            <div style={{ border: '1px solid #eee', padding: '10px', backgroundColor: '#fff' }}>I'm a tooltip</div>
                           </PortalTooltip>;

export const Tooltip = Template.bind({});
Tooltip.args = {
  container: hoverer,
  dx: 0,
  dy: 0,
  direction: 'bottom'
};