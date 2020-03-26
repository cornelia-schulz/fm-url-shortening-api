import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      links: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.shortenLink = this.shortenLink.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const inputValue = document.getElementById("shortenLink").value;
    const result = this.validateInput(inputValue);
    if (result === "ok") {
      this.shortenLink('https://news.ycombinator.com/');
    }
    else {
      document.getElementsByClassName('search-error')[0].innerHTML = '<span>' + result +'</span>';
    }
  }

  shortenLink(input) {
    axios.post('https://rel.ink/api/links/', {
      url: input
    })
    .then(response => {
      const link = {
        longLink: input,
        shortLink: `https://rel.ink/${response.data.hashid}`
      }
      let links = this.state.links;
      links.push(link)
      this.setState(state => ({
        links: links
      }));
    })
    .catch(error => {
      console.error(error);
    });
  }

  validateInput(input) {
    document.getElementById('shortenLink').classList.remove('redborder');
    document.getElementsByClassName('search-error')[0].innerHTML = '<span></span>';
    if (input.trim().length === 0) {
      document.getElementById('shortenLink').classList.add('redborder');
      return "Please add a link";
    }
    else return "ok";
  }

  render() {
    return (
      <div className="search-container">
        <form className="search">
          <div className="search-input">
          <input
            id="shortenLink"
            name="shorten-link"
            placeholder="Shorten a link here"
            type="text"
          />
          <span className="search-error"></span>
          </div>
          <button onClick={this.handleClick} type="submit">Shorten it!</button>
        </form>
        { this.state.links.length > 0 && 
          <ul className="generated-links">
            {this.state.links.map(link =>(
              <li key={link.shortLink}>
                <span className="longLink">{link.longLink}</span>
                <span className="shortLink">{link.shortLink}</span>
                <button className="copyLinkBtn">Copy</button>
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default Search;