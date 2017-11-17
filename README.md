# react-notifys
> Notifys is a React component which provides notifications with many configuration possibilities.

[![Coveralls branch](https://img.shields.io/coveralls/schiehll/react-alert/master.svg?style=flat-square)](https://coveralls.io/github/schiehll/react-alert?branch=master)
[![version](https://img.shields.io/npm/v/react-alert.svg?style=flat-square)](http://npm.im/react-alert)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Demo

You can see a live demo [here](https://mighty-brook-48505.herokuapp.com).

## Installation

To install this Component, run `yarn add react-notifys` or `npm install react-notifys`.


## Usage

To use the component, In your react Application just do

```javascript
import React from 'react';
import Notifys from 'react-notifys';

const MyComponent = (props) => <Notifys className="notifys notifys-success fade"><strong>Success!</strong> Indicates a successful or positive action.</Notifys>;

export default MyComponent;


```
Alerts are created with the notifys class, followed by one of the four contextual classes notifys-success, notifys-info, notifys-warning or notifys-danger

## Basic example
![Alt text](https://i.imgur.com/ZWIKTNI.png "Optional title")

## License
The files included in this repository are licensed under the MIT license.
