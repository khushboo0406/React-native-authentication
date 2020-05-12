//import libraries to make a component
import React from 'react';
import {Text, View} from 'react-native';

//make a component
const Header = (props) => {
  const {textStyle, ViewStyle} = styles;
  return (
    <View style={ViewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  ViewStyle: {
    backgroundColor: '#f08080',
    height: 25,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 8,
    position: 'relative',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
};

//make the component available to other part of the devices
export {Header};
