import React, { Component } from 'react';
import '../App.css'

interface Props {
 handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
 value: string
}

export default class Input extends Component<Props> {
  constructor(props: Props) {
    super(props)
   }

  render() {
    const { handleChange, value } = this.props
    return <input type="text" onChange={handleChange} value={value}/>
  }
}

