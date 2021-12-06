import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    result: '',
    yourImage: '',
    opponentImage: '',
    game: true,
  }

  onClickImage = (id, url) => {
    this.setState({game: false, yourImage: url})
    const randomNumber = Math.floor(Math.random() * choicesList.length)

    if (id === 'ROCK') {
      if (choicesList[randomNumber].id === 'SCISSORS') {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({
          result: 'YOU WON',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      } else if (choicesList[randomNumber].id === 'PAPER') {
        this.setState(prevState => ({score: prevState.score - 1}))
        this.setState({
          result: 'YOU LOSE',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      } else {
        this.setState({
          result: 'IT IS DRAW',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      }
    } else if (id === 'SCISSORS') {
      if (choicesList[randomNumber].id === 'PAPER') {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({
          result: 'YOU WON',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      } else if (choicesList[randomNumber].id === 'ROCK') {
        this.setState(prevState => ({score: prevState.score - 1}))
        this.setState({
          result: 'YOU LOSE',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      } else {
        this.setState({
          result: 'IT IS DRAW',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      }
    } else if (id === 'PAPER') {
      if (choicesList[randomNumber].id === 'ROCK') {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({
          result: 'YOU WON',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      } else if (choicesList[randomNumber].id === 'SCISSORS') {
        this.setState(prevState => ({score: prevState.score - 1}))
        this.setState({
          result: 'YOU LOSE',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      } else {
        this.setState({
          result: 'IT IS DRAW',
          opponentImage: choicesList[randomNumber].imageUrl,
        })
      }
    }
  }

  playAgain = () => {
    this.setState({game: true})
  }

  buttonContainer = () => (
    <div className="button-container">
      {choicesList.map(every => (
        <button
          type="button"
          key={every.id}
          data-testid={`${every.id.toLowerCase()}Button`}
          className="button"
          onClick={() => this.onClickImage(every.id, every.imageUrl)}
        >
          <img src={every.imageUrl} alt={every.id} className="images" />
        </button>
      ))}
    </div>
  )

  resultsContainer = () => {
    const {yourImage, opponentImage, result} = this.state
    return (
      <div className="results">
        <div className="results-container">
          <div className="results-images">
            <p className="results-name">YOU</p>
            <img src={yourImage} alt="your choice" className="images" />
          </div>
          <div className="results-images">
            <p className="results-name">OPPONENT</p>
            <img src={opponentImage} alt="opponent choice" className="images" />
          </div>
        </div>
        <p className="result-heading">{result}</p>
        <button
          type="button"
          className="playagain-button"
          onClick={this.playAgain}
        >
          Play Again
        </button>
      </div>
    )
  }

  render() {
    const {score, game} = this.state
    return (
      <div className="main-container">
        <div className="score-container">
          <div className="name-container">
            <h1 className="name">
              ROCK <br /> PAPER <br /> Scissors
            </h1>
          </div>
          <div className="score-box">
            <p className="name1">Score</p>
            <p className="name1">{score}</p>
          </div>
        </div>
        {game ? this.buttonContainer() : this.resultsContainer()}

        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="popup">
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-image"
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
