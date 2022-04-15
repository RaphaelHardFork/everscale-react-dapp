import logo from "./logo.svg"
import "./App.css"

import { abi } from "./compiled-contracts/helloWorld.abi"

import { Address, ProviderRpcClient } from "everscale-inpage-provider"
import { useState } from "react"

const helloWorldAddr =
  "0:32aa8ec987d77a146d9532f747853eef0649859f2ca79e9267bf6d2f2e4c2bfe"

const App = () => {
  const [contract, setContract] = useState()

  const ever = new ProviderRpcClient()

  const connect = async () => {
    await ever.requestPermissions({
      permissions: ["basic", "accountInteraction"],
    })
  }

  const contractInstance = async () => {
    setContract(new ever.Contract(abi, helloWorldAddr))
  }

  const callTimestamp = async () => {
    try {
      const out = await contract.methods.timestamp({}).call()
      console.log(out)
    } catch (e) {
      console.log(e)
    }
  }

  const runTouch = async () => {
    const providerState = await ever.getProviderState()
    const publicKey = providerState.permissions.accountInteraction.publicKey
    try {
      const tx = await contract.methods.touch({}).sendExternal({
        publicKey,
        withoutSignature: true,
      })
      console.log(tx)
    } catch (e) {
      console.log(e)
    }
  }

  const logTest = async () => {
    const providerState = await ever.getProviderState()
    const permissions = providerState.permissions
    const network = providerState.selectedConnection
    const address = providerState.permissions.accountInteraction.address

    console.log(providerState)
    console.log(permissions)
    console.log(network)
    console.log(contract)
    if (contract === undefined) {
      console.log("You need to create a contract instance")
    }
    console.log(address)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>All the code is in App.js</p>
        <button onClick={logTest}>LOG TEST</button>

        <button onClick={connect}>Connect Ever Wallet</button>
        <button onClick={contractInstance}>Create contract instance</button>
        <button onClick={callTimestamp}>Log Smart contract info</button>
        <button onClick={runTouch}>Run Smart contract function</button>
      </header>
    </div>
  )
}

export default App
