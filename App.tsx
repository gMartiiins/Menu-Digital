import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import { LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading'
import { CartProvider } from './src/context/useCart';


export default function App(){
   
  const [fontsLoaded] = useFonts({ PermanentMarker_400Regular, LilitaOne_400Regular });
  
  return(
  <>   

    <ThemeProvider theme={ theme }>
        <StatusBar 
          barStyle="light-content"
          backgroundColor= "transparent"
          translucent
        />       
          <CartProvider>
            { fontsLoaded ? < Routes/> : <Loading/> }
          </CartProvider>
    </ThemeProvider>
    
  </>
  );
}
