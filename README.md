# VK TypeScript

Typesafe lightweight library to make requests to VK api

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
import VK from 'vk-ts'

// Learn how to get access token here:
// https://vk.com/dev/access_token
const accessToken = 'my_vk_api_token'
const vk = new VK(accessToken)

const info = await vk.accountGetProfileInfo()
console.log(`Hello, ${info.first_name}!`)
```

## Pros

- Typesafe
- Lightweight

## Cons

- Small coverage of api
- No built-in authentication

## Available api methods

- account.getProfileInfo
- docs.get
- messages.delete
- messages.messagesGetByConversationMessageId
- messages.messagesGetConversationMembers
- messages.messagesRemoveChatUser
- messages.messagesSearch
- messages.messagesSend
- messages.messagesSetActivity
- users.get
- utils.resolveScreenName

Haven't found the method you're looking for? Open an issue [here](https://github.com/denexapp/vk-ts/issues/new)
