import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    width: Dimensions.get('screen').width, // Adicionada a propriedade width corretamente
  },
  qrcode: {
    width: Dimensions.get('screen').width, // Corrigido para incluir a largura
    height: Dimensions.get('screen').width, // Adicionada a propriedade height corretamente
  },
});

