import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Main from './Main'
import axios from 'axios'

class App extends Component {

  async componentDidMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({ method: 'eth_requestAccounts' })
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Install MetaMask!')
    }
  }

  async loadBlockchainData() {
    try {
      const web3 = window.web3

      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })

      const networkId = await web3.eth.net.getId()

      console.log("Network ID:", networkId)

      const networkData = Marketplace.networks[networkId]

      console.log("Network Data:", networkData)

      if (networkData) {
        const marketplace = new web3.eth.Contract(
          Marketplace.abi,
          networkData.address
        )

        this.setState({ marketplace })

        let productCount = await marketplace.methods.productCount().call()
        productCount = parseInt(productCount)

        let products = []

        for (let i = 1; i <= productCount; i++) {
          const product = await marketplace.methods.products(i).call()
          products.push(product)
        }

        this.setState({
          productCount,
          products,
          loading: false
        })

      } else {
        window.alert("Contract not deployed!")
        this.setState({ loading: false })
      }

    } catch (error) {
      console.error("ERROR:", error)
      this.setState({ loading: false })
    }
  }

  async testBackend() {
    try {
      const res = await axios.get("http://localhost:5000/products")

      console.log(res.data)

      alert("Backend Connected Successfully!")

    } catch (error) {

      console.error(error)

      alert("Backend Connection Failed!")
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      account: '',
      productCount: 0,
      products: [],
      loading: true,
      marketplace: null
    }

    this.createProduct = this.createProduct.bind(this)
    this.purchaseProduct = this.purchaseProduct.bind(this)
    this.testBackend = this.testBackend.bind(this)
  }

  createProduct(name, price) {

  console.log("Marketplace:", this.state.marketplace)
  console.log("Account:", this.state.account)

  if (!this.state.marketplace) {
    alert("Marketplace not loaded yet!")
    return
  }

  this.setState({ loading: true })

  this.state.marketplace.methods
    .createProduct(name, price)
    .send({ from: this.state.account })
    .on('receipt', async () => {
      await this.loadBlockchainData()
    })
  }

  async purchaseProduct(id, price) {
    this.setState({ loading: true })

    console.log("PRICE:", price)

    const value = window.web3.utils.toBN(price)

    await this.state.marketplace.methods.purchaseProduct(id).send({
      from: this.state.account,
      value: value
    })

    await this.loadBlockchainData()
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />

        <div className="container-fluid mt-5">
          <div className="row">
            <main className="col-lg-12 d-flex flex-column">

              <button
                className="btn btn-primary mb-3"
                onClick={this.testBackend}
              >
                Test Backend
              </button>

              {this.state.loading
                ? <h2>Loading...</h2>
                : <Main
                    products={this.state.products}
                    createProduct={this.createProduct}
                    purchaseProduct={this.purchaseProduct}
                  />
              }

            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default App