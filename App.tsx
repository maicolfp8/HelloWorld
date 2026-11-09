import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import MainCard from './MainCard';

export default function App() {
  const [loading, setLoading] = useState(true);

  const nombre = 'Maicol';
  const apellido = 'Feliz Peña';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ¡Hola, {nombre} {apellido}!
      </Text>

      <MainCard loading={loading} />

      <View style={styles.button}>
        <Button
          title={loading ? 'Mostrar' : 'Cargar'}
          onPress={() => setLoading(!loading)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    marginTop: 25,
    width: 180,
  },
});
