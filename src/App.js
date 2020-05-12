import React, {Component} from 'react';
import {View} from 'react-native';
import {Header, Button, Spinner, CardSection} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAymAFgYodPCDXyNFvS1fxt-AL0Ikxi-QE',
      authDomain: 'authentication-a62e4.firebaseapp.com',
      databaseURL: 'https://authentication-a62e4.firebaseio.com',
      projectId: 'authentication-a62e4',
      storageBucket: 'authentication-a62e4.appspot.com',
      messagingSenderId: '501530196833',
      appId: '1:501530196833:web:8a0c17a8cbc79dbbc5a320',
      measurementId: 'G-73JN1NMCYD',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        // eslint-disable-next-line prettier/prettier
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
