import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
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
  componentDidMount(){
const API = "quotes.json";
fetch(API).then(response => response.json()).then(data =>{
      this.setState({
        apiResult: data.quotes,
        quoteText: data.quotes[0].quote,
        quoteAuthor: data.quotes[0].author,
        quoteArrayLength: data.quotes.length
      })
    })
    
    handlenewQuote(){
    const color = ['#16a085','#27ae60','red','#f39c12','#e74c3c','#9b59b6','#FB6964',
                    'brown','green','yellow','blue','#73A857'];
    let randomNumber = Math.floor(Math.random()*(this.state.quoteArrayLength));
    let randomColorNumber = Math.floor(Math.random()*(this.state.color.length));
    this.setState({
      quoteText: this.state.apiResult[randomNumber].quote,
      quoteAuthor: this.state.apiResult[randomNumber].author,
      color: color[randomColorNumber]
    })
  }

  render(){
    let twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quoteText}- ${this.state.quoteAuthor}`;
    return (<div id="quote-box">
  



export default App;
