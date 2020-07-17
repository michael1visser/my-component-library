import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail'


storiesOf('Thumbnails', module)

//HORIZONTAL
.add('Horizontal', () => <Thumbnail itemName="Apple MacBook Pro" />)