import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ReactComponent as Arrow } from '../assets/prev.svg'
import '../styles/Carousel.css'

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 30000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 1000}px)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '1000px' })
        })}
      </div>
      {children.length > 1 ? (
        <div className="indicators">
          <button className='prev'
            onClick={() => {
              updateIndex(activeIndex - 1)
            }}
          >
          <Arrow/>
          </button>

          <button className='next'
            onClick={() => {
              updateIndex(activeIndex + 1)
            }}
          >
           <Arrow/>
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Carousel
