import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form'

let options = ["Pizza", "Wings", "Burgers", "Fries", "Yes"]

storiesOf('Form', module)

//EMAIL INPUT
    
    .add('Email Small', () => <Form type="email" placeholder="Email" />)
    .add('Email Medium', () => <Form type="email" medium placeholder="Email" />)
    .add('Email Large', () => <Form type="email" large placeholder="Email" />)

//SELECT INPUT

    .add('Select Small', () => <Form type="select" placeholder="Email" />)
    .add('Select Medium', () => <Form type="select" medium placeholder="Email" />)
    .add('Select Large', () => <Form type="select" large placeholder="Email" />)

    .add('Select Filled Small', () => <Form type="select" placeholder="Email" />)
    .add('Select Filled Medium', () => <Form type="select" medium placeholder="Email" />)
    .add('Select Filled Large', () => <Form type="select" large placeholder="Email" />)