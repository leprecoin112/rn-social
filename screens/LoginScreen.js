import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { useEffect, useState } from 'react';

export default function LoginScreen() {
  const { passwordVisibility, rightText, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const [isKeyboard, setIsKeyboard] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboard(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboard(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const hideKeyboard = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <StatusBar style={{ color: '#fffff' }} />
        <ImageBackground
          style={styles.bg}
          source={require('../assets/images/bg_auth.jpg')}
        >
          <KeyboardAvoidingView
            style={styles.form}
            enabled
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
          >
            <View>
              <Text style={styles.title}>Увійти</Text>
              <Input
                marginBottom={16}
                keyboardType="email-address"
                placeholder="Адреса електронної пошти"
              />
              <View style={{ marginBottom: isKeyboard ? 32 : 43 }}>
                <Input
                  placeholder="Пароль"
                  secureTextEntry={passwordVisibility}
                />
                <Text
                  style={styles.visiblePasswordTitle}
                  onPress={handlePasswordVisibility}
                >
                  {rightText}
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={{ backgroundColor: '#ffffff' }}>
            <Button title="Увійти"></Button>
            <Text style={styles.registrationTitle}>
              Немає акаунта? Зареєструватися
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bg: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  form: {
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  title: {
    fontWeight: 500,
    fontSize: 30,
    marginTop: 32,
    marginBottom: 32,
    marginHorizontal: 16,
    alignSelf: 'center',
  },
  visiblePasswordTitle: {
    color: '#1B4371',
    fontWeight: 400,
    fontSize: 16,
    position: 'absolute',
    bottom: 15,
    right: 26,
  },

  registrationTitle: {
    fontSize: 16,
    marginBottom: 111,
    color: '#1B4371',
    alignSelf: 'center',
  },
});
