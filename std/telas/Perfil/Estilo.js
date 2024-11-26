import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#286D50',
  },
  titulo: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    fontSize: 26,
    color: 'white',
    padding: 16,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
  },
  cameraButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 50,
    left: '40%',
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 18,
  },
});