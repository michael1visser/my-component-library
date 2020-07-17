import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import heart from '../Icons/hearts.svg'
import cart from '../Icons/cart.svg'
  


storiesOf('Button', module)

//Default
    .add('Default', () => <Button label="Do Something" />) 
    .add('Default Large', () => <Button  large label="Do Something" />) 

    .add('Default Clean', () => <Button  clean label="Do Something" />) 
    .add('Default Clean Large', () => <Button clean large label="Do Something" />) 

    .add('Default Flat', () => <Button flat label="Do Something" />) 
    .add('Default Flat Large', () => <Button flat large label="Do Something" />) 
    

//PRIMARY
    .add('Primary', () => <Button type="primary" label="Do Something" />) 
    .add('Primary Large', () => <Button type="primary"  large label="Do Something" />) 

    .add('Primary Clean', () => <Button type="primary" clean label="Do Something" />) 
    .add('Primary Clean Large', () => <Button type="primary" clean large label="Do Something" />) 

    .add('Primary Flat', () => <Button type="primary" flat label="Do Something" />) 
    .add('Primary Flat Large', () => <Button type="primary" flat large label="Do Something" />) 

//DANGER
    .add('Danger', () => <Button type="danger" label="Do Something" />) 
    .add('Danger Large', () => <Button type="danger"  large label="Do Something" />) 

    .add('Danger Clean', () => <Button type="danger" clean label="Do Something" />) 
    .add('Danger Clean Large', () => <Button type="danger" clean large label="Do Something" />) 
    
    .add('Danger Flat', () => <Button type="danger" flat label="Do Something" />) 
    .add('Danger Flat Large', () => <Button type="danger" flat large label="Do Something" />) 

//SUCCESS
    .add('Success', () => <Button type="success" label="Do Something" />) 
    .add('Success Large', () => <Button type="success"  large label="Do Something" />) 

    .add('Success Clean', () => <Button type="success" clean label="Do Something" />) 
    .add('Success Clean Large', () => <Button type="success" clean large label="Do Something" />) 

    .add('Success Flat', () => <Button type="success" flat label="Do Something" />) 
    .add('Success Flat Large', () => <Button type="success" flat large label="Do Something" />) 

//WARNING
    .add('Warning', () => <Button type="warning" label="Do Something" />) 
    .add('Warning Large', () => <Button type="warning"  large label="Do Something" />) 

    .add('Warning Clean', () => <Button type="warning" clean label="Do Something" />) 
    .add('Warning Clean Large', () => <Button type="warning" clean large label="Do Something" />) 

    .add('Warning Flat ', () => <Button type="warning" flat label="Do Something" />) 
    .add('Warning Flat Large', () => <Button type="warning" flat large label="Do Something" />) 

//SPECIAL

    .add('Cart', () => <Button type="primary" flat icon={cart} />) 
    .add('Cart Text', () => <Button type="primary" flat icon={cart} label="Add To Cart" />) 

    .add('Favorite', () => <Button type="primary" flat icon={heart} />) 
    .add('Favorite Text', () => <Button type="primary" flat icon={heart} label="  Add To Favorites" />) 