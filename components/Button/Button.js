import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title }) {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 51,
    backgroundColor: '#FF6C00',
    marginHorizontal: 16,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
