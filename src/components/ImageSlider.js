import ImageData from './ImageData'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useState } from 'react'

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)

  const nextImage = () => {
    current === ImageData.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  const prevImage = () => {
    current === 0 ? setCurrent(ImageData.length - 1) : setCurrent(current - 1)
  }

  return (
    <div>
      <section className='slider'>
        <AiOutlineArrowLeft className='leftArrow' onClick={prevImage} />
        <AiOutlineArrowRight className='rightArrow' onClick={nextImage} />
        {ImageData.map((data, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <div>
                  <h2 align='center'>{data.title}</h2>
                  <img src={data.image} alt={data.title} />
                </div>
              )}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default ImageSlider
