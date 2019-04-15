import React, { Component, ChangeEvent, ReactElement } from 'react';
import '../App.css'

interface Props {
 handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


interface State{
  
}


export default class Input extends Component<Props, State> {
 
  constructor(props: Props) {
    super(props)
    
   }

  render() {
    const { handleChange } = this.props
    return <input type="text" onChange={handleChange} />
  }
}

