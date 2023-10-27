import {StyleSheet} from 'react-native';
import {wpx, hpx} from '../../../utility/metric';
import constants from '../../../constants';

const Style = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  headerView: {
    flex: 0.1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: hpx(28),
    textAlign: 'center',
    fontWeight: 'bold',
    color: constants.appTheme.COLORS.black,
  },
  containerView: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  inputView: {
    flex: 0.15,
    marginHorizontal: hpx(20),
    borderRadius: hpx(20),
    flexDirection: 'row',
    backgroundColor: constants.appTheme.COLORS.lightGray1,
    alignItems: 'center',
  },
  inputIconView: {
    flex: 0.2,
    justifyContent: 'center',
  },
  eyeView: {
    height: hpx(30),
    width: wpx(35),
    right: hpx(10),
  },
  inputIcon: {
    height: hpx(30),
    width: wpx(35),
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: hpx(20),
    marginHorizontal: hpx(10),
  },
  loginText: {
    fontSize: hpx(25),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  bottomView: {
    flex: 0.5,
  },
  bottomContainerView: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontText: {
    fontSize: hpx(20),
  },
  signUpText: {
    fontSize: hpx(22),
    color: 'cyan',
  },
});

export default Style;
