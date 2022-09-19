import React, { useState } from 'react'
import {
  convertEtherToGwei,
  convertEtherToWei,
  convertGweiToEther,
  convertGweiToWei,
  convertWeiToEther,
  convertWeiToGwei
} from './utils'
import Keypad from './Keypad'

const Calculator = () => {
  const [calculation, setCalculation] = useState('')

  const onChange = (e, keyClickValue) => {
    const value = e.target.value
    if (keyClickValue) {
      return setCalculation(calculation + keyClickValue)
    }
    setCalculation(value)
  }

  const calculate = (equation) => {
    return Function(`'use strict'; return (${equation})`)()
  }

  const onKeyClick = e => {
    const value = e.target.value
    switch(value) {
      case 'C':
        setCalculation('')
        break
      case '=':
        if (!calculation) return
        setCalculation(calculate(calculation))
        break
      case 'ether to gwei':
        if (!calculation) return
        setCalculation(convertEtherToGwei(calculate(calculation)))
        break
      case 'ether to wei':
        if (!calculation) return
        setCalculation(convertEtherToWei(calculate(calculation)))
        break
      case 'gwei to ether':
        if (!calculation) return
        setCalculation(convertGweiToEther(calculate(calculation)))
        break
      case 'gwei to wei':
        if (!calculation) return
        setCalculation(convertGweiToWei(calculate(calculation)))
        break
      case 'wei to ether':
        if (!calculation) return
        setCalculation(convertWeiToEther(calculate(calculation)))
        break
      case 'wei to gwei':
        if (!calculation) return
        setCalculation(convertWeiToGwei(calculate(calculation)))
        break
      default:
        onChange(e, value)
    }
  }

  return (
    <div className='calculator'>
      <input value={calculation} onChange={onChange} className='display' />
      <Keypad onKeyClick={onKeyClick} />
    </div>
  )

}

// The calculator should have buttons for the digits 0-9.
// The calculator should have buttons for addition, subtraction, multiplication, and
// division.
// The calculator should have a clear button that cleans the state of the calculator.
// The calculator should have an equals button to evaluate the input.
// The calculator should have a display that supports copying/pasting. <<<< IMPORTANT
// The calculator should have built in shortcuts to convert values between the following
// preset orders of magnitude: Ethereum, Gwei, and Wei.

// One Ether is equal to 10^18 = 1,000,000,000,000,000,000 Wei. Wei is the smallest
// denomination of Ether.
// 1 Gwei is 10^9 = 1,000,000,000 Wei. Gwei is what Ethereum gas prices are frequently
// quoted in.

export default Calculator