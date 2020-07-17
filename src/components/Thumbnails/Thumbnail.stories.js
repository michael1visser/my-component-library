import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail'
import macBook from '../../images/macbook_pro.svg'


storiesOf('Thumbnails', module)

//HORIZONTAL
.add('Horizontal', () => <Thumbnail itemName="Apple MacBook Pro" imgSrc={macBook} horizontal />)

//VERTICAL
.add('Vertical', () => <Thumbnail itemName="Apple MacBook Pro" imgSrc={macBook} vertical />)
.add('Vertical Flat', () => <Thumbnail itemName="Apple MacBook Pro" imgSrc={macBook} vertical flat />)