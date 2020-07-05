import React from "react";
import iconv from 'iconv-lite';

class SpaghettiMonolithComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      display: ''
    };
  }

  process = (big5Key) => {
    console.log(big5Key);
    this.setState({
      display: `http://input.foruto.com/cjdict/Images/CJZD_JPG/${big5Key}.JPG`,
    });
    console.log(this.state.display);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      console.log(this.state.content);
      const buf = iconv.encode(this.state.content, 'big5');
      let big5Key = '';
      for (const elem of buf) {
        big5Key += elem.toString(16);
      }

      this.process(big5Key.toUpperCase());
    }
  }
  
  handleChange = (e) => {
    this.setState({content: e.target.value});
  }

  render() {
    return (
      <>
        <textarea
          className='input'
          id='input'
          maxLength="1"
          onKeyPress={this.handleKeyPress}
          defaultValue='尸'
          onChange={this.handleChange}
        />
        <div>
          {this.state.display}
          <br/>
          <img src={this.state.display} />
        </div>
      </>
    );
  }
}

export default () => <SpaghettiMonolithComponent />;
