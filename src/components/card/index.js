import React from 'react'

const card = ({ icon, title, desc, onClick }) => {
  return (
    <div
      className="card bg-white ba br4 b--black-20 pointer grow"
      onClick={onClick}>

      
      <hr className="ma0 ntPoint5 center w-30 ba b--black-20" />
      <hr className="ma0 ntPoint5 center w-30 ba b--black-20" />
      <div className="card-body content-center tc pa4 pb5">
        <img src={icon} alt="card-icon" className="w-60" />
        <h2 className="b f2 mb4">{title}</h2>
        <p className="f4 lh-copy">{desc}</p>
      </div>
    </div>
  )
}

export default card
