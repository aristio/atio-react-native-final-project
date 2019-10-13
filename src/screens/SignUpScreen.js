import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

import BgImage from '../../assets/img/bg.jpg';

class SignUpScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.backgroundImage} source={BgImage} />
        <View style={styles.logo}>
          <Text style={styles.textName}>DAFTAR</Text>
        </View>
        <View style={{paddingLeft: 25, paddingRight: 25}}>
        <Input
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
            placeholder="Nama Lengkap"
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
                name="envelope"
                size={20}
                style={{paddingRight: 4, color: '#bbabf1'}}
              />
            }
          />
          <Input
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
          <Input
            underlineColorAndroid="transparent"
            inputStyle={{color: '#bbabf1', fontSize: 16}}
            containerStyle={{
              marginBottom: 5,
              marginTop: 5,
              borderRadius: 15,
              backgroundColor: '#4322a766',
            }}
            placeholder="Ulangi Password"
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
            title="Daftar"
            titleStyle={{color: 'white', fontSize: 16}}
          />
        </View>
        <View style={styles.redirectLink}>
          <Text style={{color: '#bbabf1', fontSize: 16}}>
            Sudah punya akun?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.link}>Masuk</Text>
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
    marginBottom: 30,
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
  textName: {
    marginTop: 40,
    fontSize: 24,
    color: '#bbabf1',
    fontWeight: 'bold',
  }
});

export default SignUpScreen;
