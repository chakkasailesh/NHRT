import React, { useRef, useState } from 'react'
import './Main.css'
import MainCard from './MainCard'

const Main = () => {
  const [cards, setCards] = useState([])
  const [cardName, setCardName] = useState('')
  const colorInput = useRef()
  const handleAdd = (e) => {
    setCards((prev) => [
      ...prev,
      { title: cardName, color: colorInput.current.value },
    ])
    setCardName('')
  }
  return (
    <div className="main">
      {cards.map((card) => (
        <MainCard key={card.title} title={card.title} color={card.color} />
      ))}
      <div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Add card"
            id="name"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            style={{ height: '20px' }}
          />
          <button style={{ height: '20px' }} onClick={handleAdd}>
            +
          </button>
        </div>
        <input type="color" name="color" id="color" ref={colorInput} />
      </div>
    </div>
  )
}

export default Main
