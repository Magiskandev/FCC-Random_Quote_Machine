import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      apiResult:"",
      quoteText: "Quote Text",
      quthorAuthor: "Quote Author",
      quoteArrayLength : "",
      color: '#16a085'
    }
    this.handlenewQuote = this.handlenewQuote.bind(this);
}
  
  componentDidMount() {
  const API = "https://raw.githubusercontent.com/Magiskandev/testa/master/quotes.json";

  fetch(API).then(response => response.json()).then(data =>{
      this.setState({
        apiResult: data.quotes,
        quoteText: data.quotes[0].quote,
        quoteAuthor: data.quotes[0].author,
        quoteArrayLength: data.quotes.length
      })
    })
  }
    
    handlenewQuote() {
    const color = ['red', '#27ae60', '#9b59b6', '#f39c12', '#e74c3c', '#FB6964', 'green', 'yellow', 'lightblue', '#73A857', 'teal', 'blue'];

    let randomNumber = Math.trunc(Math.random()*(this.state.quoteArrayLength));
    let randomColorNumber = Math.trunc(Math.random()*(this.state.color.length));
    this.setState({
      quoteText: this.state.apiResult[randomNumber].quote,
      quoteAuthor: this.state.apiResult[randomNumber].author,
      color: color[randomColorNumber]
    })
  }

  render() {
    let twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quoteText} - ${this.state.quoteAuthor}`;
    return (<div id="quote-box">
                <div id="app-title">
                  <h1>FCC Random Quote Machine</h1>
                </div>
                <div id="quote-text">
                    <i className="fa fa-quote-left quote-tag" style={{color:this.state.color}}></i>
                    <h2 id="text" style={{color:this.state.color}}>{this.state.quoteText}.</h2>
                    <i className="fa fa-quote-right quote-tag" style={{color:this.state.color}}></i>
                </div>
                <div id="quote-author">
                    <cite id="author" style={{color:this.state.color}}>-{this.state.quoteAuthor}</cite>
                </div>
                <div id="tweet-newQuote">
                    <a id="tweet-quote" href={twitterUrl}  target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <button id="new-quote" onClick={this.handlenewQuote}>Siguiente Cita</button>
                </div>
            </div>)
  }
  
}

export default App;
