/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const me = "kristopher"
  const you = "alex"
  

  const names = [
    'bill',
  "joe",
"fucker",
me, you
 ]
  const [index, setIndex]  = React.useState(0);

  


  const setIndexSafely = (x, isAddition) => {
    let butts = x

    if(isAddition) {
      butts = (butts+1)%5
    } else {
      if(butts<1){
        butts=4
      }
      else {
        butts = (butts-1)%5

      }
    }

    setIndex(butts)
  }


  //(butts > 5 ) ? Alert.alert("CUNT") : Alert.alert('mlady')
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        who is it: {names[index]}
      </Text>
      
      <View style={styles.buttonRow}>
        <View style={styles.leftButton}>

          <Button color={"white"} style={styles.button} title={"press me "} onPress={() => setIndexSafely(index, true) }/>
        </View>
        <View style={styles.rightButton}>

          <Button color={"brown"} style={styles.button} title={"press you "} onPress={() => setIndexSafely(index, false) }/>
      </View>
      </View>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            tasty watermelon
          </Section>
    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 25 ,
    color: 'red',
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  leftButton: {
    backgroundColor:"teal"
    
  },
  rightButton:{
    backgroundColor:"coral"
  },
  button: {
    flex: 1, 
    width: '100%',
    height: '100%'

  },
  buttonRow:{
    backgroundColor:"biege",
    flexDirection:"row",
    width:"100%"  ,
    height:100,
    flex:1
  }
});

export default App;
