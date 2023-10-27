import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Style from './style';
import constants from '../../../constants';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={Style.safeView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Style.mainView}>
          <View style={Style.headerView}>
            <Text style={Style.headerText}>SignUp Screen</Text>
          </View>
          <KeyboardAvoidingView style={{flex: 0.5}}>
            <View style={Style.containerView}>
              <View style={Style.inputView}>
                <View style={Style.inputIconView}>
                  <Image
                    style={Style.inputIcon}
                    source={constants.icon.Email}
                  />
                </View>
                <TextInput
                  style={Style.textInput}
                  placeholder="Enter Email Here"
                  maxLength={30}
                />
              </View>
              <View style={Style.inputView}>
                <View style={Style.inputIconView}>
                  <Image style={Style.inputIcon} source={constants.icon.Lock} />
                </View>
                <TextInput
                  style={Style.textInput}
                  placeholder="Enter Password Here"
                  maxLength={15}
                />
                <TouchableOpacity style={Style.eyeView}>
                  <Image style={Style.inputIcon} source={constants.icon.Eye} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={[
                  Style.inputView,
                  {backgroundColor: 'cyan', justifyContent: 'center'},
                ]}>
                <Text style={Style.loginText}>{constants.constants.Create}</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={Style.bottomView}>
            <View style={Style.bottomContainerView}>
              <Text style={Style.dontText}>{constants.constants.Already}</Text>
              <TouchableOpacity style={Style.signUpView}>
                <Text style={Style.signUpText}>
                  {constants.constants.Login}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignUpScreen;
