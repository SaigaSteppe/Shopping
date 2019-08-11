import React from 'react';
import './App.css';
import Header from './components/Header'

class App extends React.Component {
  state = {

    itemImage: '/images/classic-tee.jpg',
    itemName: 'Classic Tee',
    itemPrice: '75.00',
    itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    itemSize: null,

    cartItems: []

  }

  onClickSize = (event) => {

    //if a size is currently selected and clicked again, then toggle off
    if (this.state.itemSize === event.target.value) {
      this.setState({ itemSize: null })
    }

    //a size is selected
    else {
      this.setState({ itemSize: event.target.value })
    }

  }

  onAddToCart = () => {

    //if no size selected display message to select a size
    if (this.state.itemSize == null) {
      alert('Please select a size')
    }

    //if a size is selected, add to cart
    else {
      this.setState(previousState => ({
        cartItems: [...previousState.cartItems, this.state.itemSize]
      }));
    }

  }

  render() {

    return (
      <div style={{ marginTop: 20 }}>

        <Header
          cartItems={this.state.cartItems}
          itemImage={this.state.itemImage}
          itemName={this.state.itemName}
          itemPrice={this.state.itemPrice}
        />

        <div className='container-fluid' style={{ paddingLeft: 50, paddingRight: 50 }}>

          <div className="row">

            <div className="col">
              <img src={this.state.itemImage} alt='sample item' />
            </div>

            <div className="col">
              <h1>{this.state.itemName}</h1>
              <hr />
              <h3>${this.state.itemPrice}</h3>
              <hr />
              <p className='content-text'>{this.state.itemDescription}</p>
              <b className='content-text'>SIZE</b><span style={{ color: '#C90000' }}>*</span> <span><b>{this.state.itemSize}</b></span>

              <form >

                <label className={this.state.itemSize === 'S' ? 'button-active' : 'button-inactive'} onClick={this.onClickSize}>
                  <input type='radio' name='Medium' value='S' />
                  <b>S</b>
                </label>

                <label className={this.state.itemSize === 'M' ? 'button-active' : 'button-inactive'} onClick={this.onClickSize}>
                  <input type='radio' name='Medium' value='M' />
                  <b>M</b>
                </label>

                <label className={this.state.itemSize === 'L' ? 'button-active' : 'button-inactive'} name='L' onClick={this.onClickSize}>
                  <input type='radio' name='Large' value='L' style={{ visibility: 'hidden' }} />
                  <b>L</b>
                </label>
              </form>

              <button
                className='button-add-to-cart'
                onClick={this.onAddToCart}>
                <b>ADD TO CART</b>
              </button>

            </div>
          </div>

        </div>
      </div>
    );

  }

}

export default App;
