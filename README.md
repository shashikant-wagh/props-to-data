<p align="center">
  <a href="" rel="noopener">
    <img 
      src="https://i.imgur.com/M9B96Bw.jpg" 
      alt="Props To Data"
      style="max-width: 100%;border-radius: 50%;height: 150px;width: 150px;">
  </a>
</p>

<h2 align="center">Props To Data</h2>

## Table of Contents
- [Introduction](#introduction)
- [Installation](#install)
- [Usage](#usage)
- [References](#references)

## Introduction <a name = "introduction"></a>
props-to-data is a MIT-licensed open source project, which help your Vue components communicate effortlessly with each other via props without contaminating component data.

We are regulating components to follow law of demeter, which is most underrated but indeed one of the most important and integral part of clean code movement, which helps you to reach goal of better, cleaner architecture.

## Installation <a name = "install"></a>
```
npm install props-to-data
```

## Usage <a name = "usage"></a>
1. Import package.
```
import propsToData from 'props-to-data'
```
2. Add following to mixins array.
```
mixins: [propsToData]
```
3. Add following to your data object, within a component.
```
propsToData: {
    <prop-entity-name>: <data-entity-name>
}
```

## References <a name = "references"></a>
- [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter).
- [The Paperboy, The Wallet, and The Law Of Demeter](https://www2.ccs.neu.edu/research/demeter/demeter-method/LawOfDemeter/paper-boy/demeter.pdf).
