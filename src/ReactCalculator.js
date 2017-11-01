import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    TouchableHighlight,
    AppRegistry //Used to ensure JS execution environment is setup
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {

  constructor(props) { //constructor is only time you can modify state directly after which it is immutable
    super(props); //passes it the super constructor

    this.state = {
      inputValue: 0
    }

  }


  _onInputButtonPressed(input) {
    alert(input)
  }

  render() {
    return ( //Creates container View that wraps two sections and takes full width and height
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

    _renderInputButtons() {

      let views = [];

      for (var r = 0; r < inputButtons.length; r ++) {
          let row = inputButtons[r];

          let inputRow = [];
          for (var i = 0; i < row.length; i ++) {
              let input = row[i];

              inputRow.push(
                  <InputButton
                    value={input}
                    onPress={this._onInputButtonPressed.bind(this, input)}
                    key={r + "-" + i} />
              );
          }

          views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
      }

        return views;
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator); //For app root components to register themselves for system to load the bundle for the app
