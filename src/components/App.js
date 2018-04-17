import React, { Component } from 'react'
import { Animated } from 'react-animated-css'

import LogoComponent from './logo'
import Card from './card'
import Modal from './modal'
import logo from './logo.svg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        user: 'Kayode',
        gender: 'Male'
      },
      welcomeInfo: [
        {
          title: 'Invoice Payment',
          desc:
            'Maecenas tincidunt suscipit leo, et scelerisque turpis tincidunt in',
          icon: 'make-payment.png'
        },
        {
          title: 'Make Payment',
          desc:
            'Maecenas tincidunt suscipit leo, et scelerisque turpis tincidunt in',
          icon: 'make-payment.png'
        },
        {
          title: 'Receive Payment',
          desc:
            'Maecenas tincidunt suscipit leo, et scelerisque turpis tincidunt in',
          icon: 'receive-payment.png'
        },
        {
          title: 'View Settlement',
          desc:
            'Maecenas tincidunt suscipit leo, et scelerisque turpis tincidunt in',
          icon: 'settlement.png'
        }
      ],
      showModal: false
    }
  }

  handleClose() {
    this.setState({ showModal: false })
  }

  handleShow() {
    this.setState({ showModal: true })
  }

  render() {
    return (
      <div>
        <div className={`App tc vh-100 ${this.state.showModal ? 'blur' : ''}`}>
          <LogoComponent src={logo} className="mw5 mt6" />
          <Animated
            animationIn="fadeInLeft"
            animationInDelay={400}
            isVisible={true}
          >
            <h2 className="f-5 mv4 fw3 roboto">
              Hello{' '}
              {`${this.state.userInfo.gender === 'Male' ? 'Mr' : 'Mrs'} ${
                this.state.userInfo.user
              }`}
            </h2>
          </Animated>
          <p className="f2 mb5 black-40">What do you want to do today?</p>
          <Animated
            animationIn="fadeInUp"
            animationInDelay={90}
            isVisible={true}
          >
            <div className="center ph5-ns">
              <div className="cf ph2-ns">
                {this.state.welcomeInfo.map(({ icon, title, desc }, index) => {
                  return (
                    <div className="fl w-100 w-25-ns pa4" key={index}>
                      <Card
                        icon={`cardIcons/${icon}`}
                        title={title}
                        desc={desc}
                        onClick={() => this.handleShow()}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </Animated>
        </div>
        <Modal
          modalSize="lg"
          content={this.state.welcomeInfo}
          onClick={() => this.handleClose()}
          displayModal={this.state.showModal}
        />
      </div>
    )
  }
}

export default App
