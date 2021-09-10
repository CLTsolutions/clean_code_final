import React, { Component } from 'react'
import '../styles/Cats.css'

type CatsProps = {}
type CatsState = {
  url: string
  interval: number
}

export default class Cats extends Component<CatsProps, CatsState> {
  constructor(props: CatsProps) {
    super(props)
    this.state = {
      url: '',
      interval: 0,
    }
    this.fetchCats = this.fetchCats.bind(this)
  }

  componentDidMount(): void {
    this.fetchCats()
    this.setState({
      // using windows to satisfy ts
      interval: window.setInterval(this.fetchCats, 5000),
    })
  }

  componentWillUnmount(): void {
    clearInterval(this.state.interval)
  }

  async fetchCats(): Promise<void> {
    try {
      let res = await fetch(`https://api.thecatapi.com/v1/images/search`)
      let data = await res.json()
      this.setState({
        url: data[0].url,
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { url } = this.state
    return (
      <div className='cats'>
        <h1>Cats</h1>
        {url === '' ? (
          <h1>Bummer! These cats must not like people....</h1>
        ) : (
          <img src={url} alt='Random Cat' />
        )}
      </div>
    )
  }
}
