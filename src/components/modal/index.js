import React from 'react'
import Card from '../card'
import { Animated } from 'react-animated-css'

const Modal = ({ content, modalSize, onClick, displayModal }) => {
  return (
    // {
    //   displayModal ? () :
    // }
    <div
      className={`modal fixed top-0 left-0 right-0 bottom-0 z-999 bg-black-50 ${
        !displayModal ? 'dn' : ''
      }`}
    >
      <div className="relative flex justify-center items-center center vh-100 mw9">
        <button
          className="absolute top-2 right-0 bg-black-40 pointer pa0 w3 h3 bn br-100"
          onClick={onClick}
        >
          <span className="f2 fw3 white ma0">×</span>
        </button>
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOutLeft"
          animationInDelay={20}
          isVisible={displayModal}
        >
          {content.map(({ icon, title, desc }, index) => {
            return (
              <div className="fl w-100 w-25-ns pa3" key={index}>
                <Card icon={`cardIcons/${icon}`} title={title} desc={desc} />
              </div>
            )
          })}
        </Animated>
      </div>
    </div>
  )
}

export default Modal
