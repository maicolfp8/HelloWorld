import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MainCardProps = {
  loading: boolean;
};

export default function MainCard({ loading }: MainCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {loading ? 'Cargando...' : 'Contenido Listo!'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e8e8e8',
    padding: 25,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
