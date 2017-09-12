import React, { Component } from 'react';
import './Affiliate.css';
class Affiliate extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit:true,
      value: 'samplelink0909',
      copied: false,
    }
  }
  showTextbox = ()=>{
    this.setState({
      edit:false,
      copied:false
    })
  }
  hideTextbox = ()=>{
    this.setState({
      edit:true,
      copied:false
    })
  }
  onChange = (event) => {
    this.setState({
      value:event.target.value,
      copied: false
    });
  }

  copyToClipboard = () => {
  var textField = document.createElement('textarea')
  textField.innerText = 'BALLPRK.com' + this.state.value;
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  this.setState({copied: true});
  textField.remove()
  }
  render() {
    return (
      <div className="main">
        <h2>Something, something Derek!!</h2>
        <h5>Better make the something of this, because this API is important</h5>
        <hr className='breakpoint'/>
        <div className='editor-link'>
          <h4>BALLPRK.com/</h4>
          {this.state.edit ?
            <span>
            <input type='text' className='input-field' value={this.state.value} disabled />
            <a onClick={this.copyToClipboard}><i className='fa fa-clone grey'></i></a>&nbsp;
            <a onClick={this.showTextbox}><i className='fa fa-pencil grey'></i></a>
            </span> :
            <span>
            <input type='text' onChange={this.onChange} value={this.state.value} name='link' className='input-field border-grey' />&nbsp;
            <i onClick={this.hideTextbox} className='fa fa-check green'></i>
            </span>}
            {this.state.copied ? <span>&nbsp;Copied.</span> : null}
        </div>
        <hr className='breakpoint'/>
        <div className='socials'>
          <p>Share</p>
          <ul>
            <li className='linkedin'><a href=''><i className='fa fa-linkedin'></i></a></li>
            <li className='facebook'><a href=''><i className='fa fa-facebook'></i></a></li>
            <li className='messenger'><a href=''><i className='fa fa-bolt'></i></a></li>
            <li className='twitter'><a href=''><i className='fa fa-twitter'></i></a></li>
            <li className='email'><a href=''><i className='fa fa-envelope'></i></a></li>
          </ul>
          <p>Import Contacts</p>
          <a href='' className='btn gmail'><i className='fa fa-google'></i>&nbsp;Gmail</a>
          <a href='' className='btn yahoo'><i className='fa fa-yahoo'></i>&nbsp;Yahoo!</a>
          <a href='' className='btn outlook'><i className='fa fa-windows'></i>&nbsp;Outlook</a>
          <p>Email Contacts</p>
          <input type='email' placeholder='Add an email...' className='input-field-lg' />
          <a href='' className='btn btn-black'>Invite</a>
        </div>
        <div className='funds'>
          <h3>Available Funds</h3>
          <h1><sup>$</sup>123&nbsp;<sup>88</sup></h1>
          <p>Totally earned: 135 Million</p>
          <a href='' className='btn btn-theme'>Payout</a>
          <h3>Stats</h3>
          <div className='stats-container'>
            <div className='stat-item'>
            124 <br/> <span>Clicks</span>
            </div>
            <div className='stat-item'>
            124 <br/> <span>Sign Ups</span>
            </div>
            <div className='stat-item'>
            124 <br/> <span>Sessions</span>
            </div>
          </div>
          <div className='grey-bg'></div>
          <h3>Media Kit</h3>
          <a href='' className='btn btn-black'>Download</a>
         </div>
      </div>
    );
  }
}

export default Affiliate;
