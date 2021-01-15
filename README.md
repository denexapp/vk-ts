# VK TypeScript
Typesafe lightweight library to make requests to VK api.

[![GitHub license](https://img.shields.io/github/license/denexapp/vk-ts)](https://github.com/denexapp/vk-ts/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/vk-ts.svg)](https://www.npmjs.com/package/vk-ts)

## Installation
Using npm:
```
npm install vk-ts
```
Using yarn:
```
yarn add vk-ts
```
## Usage
```typescript
import Vk from 'vk-ts'

// Learn how to get access token here:
// https://vk.com/dev/access_token
const accessToken = 'my_vk_api_token'
const vk = new Vk(accessToken)

const info = await vk.accountGetProfileInfo()
console.log(`Hello, ${info.first_name}!`)
```
## Pros
* Typesafe
* Lightweight

## Cons
* Small coverage of api
* No built-in authentication
