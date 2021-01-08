# VK TypeScript
Typesafe lightweight library to make requests to VK api.


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
* Works in browser and node (react-native is untested)

## Cons
* Small coverage of api
* No built-in authentication

Created by @denexapp, MIT license