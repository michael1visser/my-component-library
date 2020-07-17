import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form'

let options = ["Pizza", "Wings", "Burgers", "Fries", "Yes"]

let numMin = 1
let numMax = 10

storiesOf('Form', module)

//EMAIL INPUT
    
    .add('Email Small', () => <Form type="email" placeholder="Email" />)
    .add('Email Medium', () => <Form type="email" medium placeholder="Email" />)
    .add('Email Large', () => <Form type="email" large placeholder="Email" />)

//SELECT INPUT

    .add('Select Small', () => <Form type="select" options={options} />)
    .add('Select Medium', () => <Form type="select" medium options={options} />)
    .add('Select Large', () => <Form type="select" large options={options} />)

    .add('Select Filled Small', () => <Form type="select" filled options={options} />)
    .add('Select Filled Medium', () => <Form type="select" filled medium options={options} />)
    .add('Select Filled Large', () => <Form type="select" filled large options={options} />)