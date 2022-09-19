import React from 'react'
import './Calculator.css'

const Keypad = ({ onKeyClick }) => {
 return (
    <>
      <div className='shortcuts'>
        <div>
          <button value="ether to gwei" onClick={onKeyClick}>Ether to Gwei</button>
          <button value="ether to wei" onClick={onKeyClick}>Ether to Wei</button>
        </div>
        <div>
          <button value="gwei to ether" onClick={onKeyClick}>Gwei to Ether</button>
          <button value="gwei to wei" onClick={onKeyClick}>Gwei to Wei</button>
        </div>
        <div>
          <button value="wei to ether" onClick={onKeyClick}>Wei to Ether</button>
          <button value="wei to gwei" onClick={onKeyClick}>Wei to Gwei</button>
        </div>
      </div>
      <div className='numpad'>
        <div>
          <button value="7" onClick={onKeyClick}>7</button>
          <button value="8" onClick={onKeyClick}>8</button>
          <button value="9" onClick={onKeyClick}>9</button>
          <button value="C" onClick={onKeyClick}>C</button>
        </div>
        <div>
          <button value="4" onClick={onKeyClick}>4</button>
          <button value="5" onClick={onKeyClick}>5</button>
          <button value="6" onClick={onKeyClick}>6</button>
          <button value="/" onClick={onKeyClick}>/</button>
        </div>
        <div>
          <button value="1" onClick={onKeyClick}>1</button>
          <button value="2" onClick={onKeyClick}>2</button>
          <button value="3" onClick={onKeyClick}>3</button>
          <button value="*" onClick={onKeyClick}>*</button>
        </div>
        <div>
          <button value="=" onClick={onKeyClick}>=</button>
          <button value="0" onClick={onKeyClick}>0</button>
          <button value="-" onClick={onKeyClick}>-</button>
          <button value="+" onClick={onKeyClick}>+</button>
        </div>
      </div>
  </>
)
}

export default Keypad