import React, { Component } from 'react'
import '../styles/Dogs.css'
import { Button } from 'reactstrap'

type DogProps = {}
type DogState = {
  url: string
  // breed: string
}

export default class Dogs extends Component<DogProps, DogState> {
  constructor(props: DogProps) {
    super(props)
    this.state = {
      url: '',
      // breed: '',
    }
    this.fetchDogs = this.fetchDogs.bind(this)
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

    // this.setState({
    //   // using windows because ts was mad without it
    //   interval: window.setInterval(this.fetchCats, 5000),
    // })
    this.fetchDogs()
  }

  componentDidUpdate(): void {
    console.log('updating')
  }

  componentWillUnmount(): void {
    console.log('unmounting')
    // clearInterval(this.state.interval)
  }

  async fetchDogs(): Promise<void> {
    console.log('fetching?')
    try {
      // let res = await fetch(`https://api.thedogapi.com/v1/images/search`)
      let res = await fetch(`https://api.thedogapi.com/v1/images/search`)
      let data = await res.json()
      console.log('My Data:', data)
      this.setState({
        url: data[0].url,
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className='dogs'>
        <h1>Dogs</h1>
        {/* <input
          value={this.state.breed}
          onChange={e => this.setState({ breed: e.target.value })}
          placeholder='Type here to load a dog.'
        /> */}
        {/* <button onClick={this.fetchDogs}>Fetch!</button> */}
        <Button color='secondary' onClick={this.fetchDogs}>
          Fetch!
        </Button>
        <img src={this.state.url} alt='Random Dog' />
      </div>
    )
  }
}
