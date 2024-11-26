import React, { useEffect, useState } from 'react';
import { useFonts, Kanit_200ExtraLight, Kanit_600SemiBold } from '@expo-google-fonts/kanit';
import { TouchableOpacity, View, StyleSheet, TextInput, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Audio } from 'expo-av';
import { Video, ResizeMode } from 'expo-av';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';

// Importando as telas
import Produto from '../meuApp/std/telas/Produtos/Index';
import mock from '../meuApp/std/mocks/produto';
import mock_sobre from '../meuApp/std/mocks/sobre';
import Sobre from '../meuApp/std/telas/Sobre/index';
import Artes from '../meuApp/std/telas/Artes/Index';
import artes from './std/mocks/artes';
import ListaDesejos from './../meuApp/std/telas/ListaDesejos';
import Desejos from './std/telas/Desejos';
import Texto from './std/componentes/Texto';

// Importando o WishlistContext
import { WishlistProvider } from './std/telas/Artes/WishlistContext';

// Funções de navegação das telas
function ListaDesejo() {
  return <ListaDesejos />;
}

function MenuKit() {
  return <Produto {...mock} />;
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />;
}

function MenuArtes() {
  return <Artes {...artes} />;
}

function MenuAudio() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/winner-bell-game-show-91932.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return (
    <TouchableOpacity onPress={(e) => { if (!loading) { setAudioStatus(!audioStatus); } }}>
      <Texto>🎧on/off🎧</Texto>
    </TouchableOpacity>
  );
}

function MenuVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('./assets/videoDesenho1.mp4')}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    backgroundColor: 'red',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
});

function MenuCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!isFocused) {
    return null;
  }

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={cameraStyles.text}>Permissão para usar a câmera foi negada</Text>;
  }

  const handleFlipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleTakePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log(photo.uri);
    }
  };

  return (
    <View style={cameraStyles.container}>
      <Camera
        style={cameraStyles.camera}
        type={cameraType}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={cameraStyles.buttonContainer}>
          <TouchableOpacity style={cameraStyles.button} onPress={handleFlipCamera}>
            <Text style={cameraStyles.text}>Virar Câmera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={cameraStyles.button} onPress={handleTakePicture}>
            <Text style={cameraStyles.text}>Tirar Foto</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  button: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f55353',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Kit") {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === "Sobre nós") {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === "Produtos") {
            iconName = focused ? 'brush' : 'brush-outline';
          } else if (route.name === "Desejos") {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === "Video") {
            iconName = focused ? 'play' : 'play-outline';
          } else if (route.name === "Camera") {
            iconName = focused ? 'camera' : 'camera-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Sobre nós" component={MenuSobre} />
      <Tab.Screen name="Kit" component={MenuKit} />
      <Tab.Screen name="Produtos" component={MenuArtes} />
      <Tab.Screen name="Desejos" component={ListaDesejo} />
      <Tab.Screen name="Video" component={MenuVideo} />
      <Tab.Screen name="Camera" component={MenuCamera} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    "KanitRegular": Kanit_200ExtraLight,
    "KanitBold": Kanit_600SemiBold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <WishlistProvider> {/* Envolvendo o app com WishlistProvider */}
      <NavigationContainer>
        <TabsMenu />
        <MenuAudio />
      </NavigationContainer>
    </WishlistProvider>
  );
}
