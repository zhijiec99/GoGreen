
import { RNCamera } from 'react-native-camera';
import React, { Component, PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Icon} from 'react-native-elements';
import { sendPicture } from '../helpers/apiHelper';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }

    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true, pauseAfterCapture: false };
          const data = await this.camera.takePictureAsync(options);
          console.log(data);
          sendPicture(data.uri).then((result) => {
            console.log(result);
          })
          // console.log(data);
        }
      };


    render() {
        return (
            <View style={styles.container}>
                {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, justifyContent: 'center', alignItems: 'center'}}>

                </View>  */}
                <RNCamera
                  ref={ref => {
                      this.camera = ref;
                  }}
                  style={styles.preview}
                  type={RNCamera.Constants.Type.back}
                  // flashMode={RNCamera.Constants.FlashMode.on}
                  androidCameraPermissionOptions={{
                      title: 'Permission to use camera',
                      message: 'We need your permission to use your camera',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                  }}  
                  androidRecordAudioPermissionOptions={{
                      title: 'Permission to use audio recording',
                      message: 'We need your permission to use your audio',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                  }}
                  
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                    <View style={{position: 'absolute', width: 300, height: 300, borderColor: 'red', borderWidth: 5, borderRadius: 20, alignSelf: 'center'}}>
                      <Text style={{color: 'yellow', fontSize: 25, marginTop: -45, marginLeft: 15,}}>Apple <Text style={{fontSize: 15,}}>25% accuracy</Text></Text>
                    </View>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Icon name='camera' size={40} color="white" type="material"/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      position: 'absolute',
      bottom: 50,
      backgroundColor: '#f00',
      justifyContent: 'center',
      borderRadius: 55,
      width: 75,
      height: 75,
      alignSelf: 'center',
    },
  });
  

export default Home;