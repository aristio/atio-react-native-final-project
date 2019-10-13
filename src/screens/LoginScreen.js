import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import BgImage from '../../assets/img/bg.jpg';
import logo from '../../assets/img/cat.png';

import {login} from '../services/Api';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    user: '',
    password: '',
    error: false,
    loading: false,
  };

  _signInAsync = async () => {

    try {
      const response = await login(this.state.user, this.state.password);
      if (response) {
        await AsyncStorage.setItem('userToken', 'abc');
        setTimeout(() => {
          this.props.navigation.navigate('App');
        }, 1000);
      }
    } catch ({message}) {
      this.setState({
        error: message,
      });
    }
  };

  clearValidationErrors() {
    this.setState({
      error: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={BgImage} />
        <View style={styles.logo}>
          <Image style={styles.imageLogo} source={logo} />
          <Text style={styles.textLogo}>OBROLAN KUCING</Text>
        </View>
        {this.state.error && (
          <View style={styles.validationErrors}>
            <Text style={styles.error}>{this.state.error}</Text>
          </View>
        )}
        <View style={{paddingLeft: 25, paddingRight: 25}}>
          <Input
            value={this.state.text}
            ref={textInput => (this._user = textInput)}
            onChangeText={user => this.setState({user})}
            onSubmitEditing={event => this._password.focus()}
            onFocus={() => this.clearValidationErrors()}
            underlineColorAndroid="transparent"
            inputStyle={{
              color: '#bbabf1',
              fontSize: 16,
            }}
            containerStyle={{
              marginBottom: 5,
              marginTop: 5,
              borderRadius: 15,
              backgroundColor: '#4322a766',
            }}
            placeholder="Email"
            placeholderTextColor="#bbabf1"
            leftIcon={
              <Icon
                name="user"
                size={20}
                style={{paddingRight: 4, color: '#bbabf1'}}
              />
            }
          />
          <Input
            value={this.state.text}
            ref={textInput => (this._password = textInput)}
            onChangeText={password => this.setState({password})}
            onSubmitEditing={event => this.submit()}
            underlineColorAndroid="transparent"
            inputStyle={{color: '#bbabf1', fontSize: 16}}
            containerStyle={{
              marginBottom: 5,
              marginTop: 5,
              borderRadius: 15,
              backgroundColor: '#4322a766',
            }}
            placeholder="Password"
            placeholderTextColor="#bbabf1"
            leftIcon={
              <Icon
                name="lock"
                size={20}
                style={{paddingRight: 4, color: '#bbabf1'}}
              />
            }
            secureTextEntry={true}
          />
        </View>
        <View style={{paddingLeft: 25, paddingRight: 25}}>
          <Button
            containerStyle={{
              marginBottom: 10,
              marginTop: 10,
            }}
            title="Masuk"
            titleStyle={{color: 'white', fontSize: 16}}
            onPress={this._signInAsync}
          />
        </View>
        <View style={styles.redirectLink}>
          <Text style={{color: '#bbabf1', fontSize: 16}}>
            Tidak punya akun?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.link}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 70,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    width: 170,
    height: 150,
  },
  textLogo: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    fontSize: 16,
  },
  redirectLink: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  validationErrors: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  error: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'red',
  },
});

export default LoginScreen;
