import React from 'react';
import { storiesOf } from '@storybook/react';
import Thumbnail from './Thumbnail'
import macBook from '../../images/macbook_pro.svg'
import beats from '../../images/beats.svg'


storiesOf('Thumbnails', module)

//HORIZONTAL
.add('Horizontal', () => <Thumbnail itemName="Apple MacBook Pro" imgSrc={macBook} type="block" horizontal />)
.add('Horizontal Borderless', () => <Thumbnail itemName="Beats Solo 2 On Ear Headphones - Black" imgSrc={beats} type="block" borderless />)

//VERTICAL
.add('Vertical', () => <Thumbnail itemName="Apple MacBook Pro" imgSrc={macBook} type="block" vertical />)
.add('Vertical Flat', () => <Thumbnail itemName="Apple MacBook Pro" imgSrc={macBook} type="block" vertical flat />)

//INLINE
.add('Inline', () => <Thumbnail itemName="Beats Solo 2 On Ear Headphones - Black" imgSrc={macBook} type="inline" totalReviews="0" />)