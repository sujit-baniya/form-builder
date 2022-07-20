import React from 'react'
import { useState } from 'react'
import '~/css/App.css'
import {Greet} from './components/Greet'
import { Message } from './components/Message'
import { ParentComponent } from './components/ParentComponent'

export const App = () => {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  )
}