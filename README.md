# Everscale React dApp

This is based on this repo: https://github.com/EverscaleGuild/everscale-tutor-web

This show how to connect EVER wallet, but not others wallets. All the code needed is in `App.js` and in the repo mentionned above.

## Dependencies needed

```zsh
yarn add everdev
yarn add everscale-inpage-provider
```

## Used for the exemple

helloWorld contract: https://github.com/RaphaelHardFork/locklift-project/tree/main/contracts/helloWorld

Deployed at this address on the testnet: **0:32aa8ec987d77a146d9532f747853eef0649859f2ca79e9267bf6d2f2e4c2bfe**

With this signer:

```json
"keys": {
        "public": "c0baa094d032d6550bfab9ba34706de0d006908d760347f759455e2ff565ae5a",
        "secret": "64368d711c1b40897264c36980a6ec3b51231848314064a294ab6cc478926f33"
    }
```

Problem: contract can only be read, cannot do run function on the contract. Get:

```js
{
  code: 0
  message: "Message expired"
}
```
