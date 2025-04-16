import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import PostItImage from '@/assets/images/post-it.png'
import { router, useRouter } from "expo-router";

export default function HomeScreen() {
  return (
    <View
    style ={styles.container}
    >

      <Image source={PostItImage} style ={styles.image} />
      <Text style={styles.title}>Welcome to Notes App !</Text>
      <Text style={styles.subtitle}>Capture your mind.</Text>

      <TouchableOpacity
      style={styles.button}
      onPress={()=>router.push('/notes')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'#f8f9fa'
  },
  image:{
    width:100,
    height:100,
    marginBottom:20,
    borderRadius:10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})