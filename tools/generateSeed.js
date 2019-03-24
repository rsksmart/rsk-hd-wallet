#!/usr/bin/env node
const { generateSeed } = require('../src/utils')
const seed = generateSeed()
console.log(seed)
