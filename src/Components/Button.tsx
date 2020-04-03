import React, { Component } from 'react';

interface iProps {
  link: string;
  id: number;
}

interface iState {
  buttonText: string;
  clicked: boolean;
}

class Button extends Component<iProps, iState> {
  constructor(props:iProps) {
    super(props)
    this.state = {
      buttonText: 'Copy',
      clicked: false
    }
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
    this.revertState = this.revertState.bind(this);
  }

  copyToClipBoard() {
    const buttons = document.getElementsByClassName('copyLinkBtn');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('violet');
    }

    let linkText = document.createElement('input');
    document.body.appendChild(linkText);
    linkText.setAttribute('value', this.props.link);
    linkText.select();
    document.execCommand('copy');
    document.body.removeChild(linkText);

    const button = document.getElementsByClassName('copyLinkBtn')[Number(this.props.id)];
    button.classList.add('violet');

    this.setState(state => ({
      buttonText: 'Copied!'
    }));

    this.revertState();
  }

  revertState() {
    setTimeout(() => {
      const button = document.getElementsByClassName('copyLinkBtn')[Number(this.props.id)];
      button.classList.remove('violet');
      this.setState({ buttonText: 'Copy'});
}, 8000)
  }

  render() {
    return (
      <button
        className="copyLinkBtn"
        onClick={this.copyToClipBoard}
      >
        { this.state.buttonText }
      </button>
    )
  }
}

export default Button;