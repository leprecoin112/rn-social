import { TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
export default function Input({
  marginBottom = 0,
  keyboardType = 'default',
  placeholder = '',
  secureTextEntry = false,
}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      secureTextEntry={secureTextEntry}
      style={{
        ...styles.input,
        marginBottom: marginBottom,
        borderColor: isFocus ? '#FF6C00' : '#E8E8E8',
      }}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    height: 50,
    padding: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
});
