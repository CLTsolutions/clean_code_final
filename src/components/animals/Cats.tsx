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
    console.log('component mounted')
    // fetch(`https://api.thecatapi.com/v1/images/search`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       url: data[0].url,
    //     })
    //   })

    // so cat shows right away instead of waiting 5 secs
    this.fetchCats()
    this.setState({
      // using windows because ts was mad without it
      interval: window.setInterval(this.fetchCats, 5000),
    })
  }

  componentDidUpdate(): void {
    console.log(this.state.interval)
  }

  componentWillMount(): void {
    console.log('unmounting')
    clearInterval(this.state.interval)
  }

  async fetchCats(): Promise<void> {
    try {
      let res = await fetch(`https://api.thecatapi.com/v1/images/search`)
      let data = await res.json()
      console.log(data)
      this.setState({
        url: data[0].url,
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className='cats'>
        <h1>Cats</h1>
        <img src={this.state.url} alt='Random Cat' />
      </div>
    )
  }
}
