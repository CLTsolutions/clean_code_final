import React, { Component } from 'react'
import '../styles/Dogs.css'
import { Button } from 'reactstrap'

type DogProps = {}
type DogState = {
  url: string
}

export default class Dogs extends Component<DogProps, DogState> {
  constructor(props: DogProps) {
    super(props)
    this.state = {
      url: '',
    }
    this.fetchDogs = this.fetchDogs.bind(this)
  }

  async fetchDogs(): Promise<void> {
    try {
      let res = await fetch(`https://api.thedogapi.com/v1/images/search`)
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
      <div className='dogs'>
        <h1>Dogs</h1>
        <Button color='secondary' onClick={this.fetchDogs}>
          Fetch!
        </Button>
        {url === '' ? <></> : <img src={url} alt='Random Dog' />}
      </div>
    )
  }
}
