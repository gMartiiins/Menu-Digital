import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../screens/HomePage';
import { Restaurant } from '../screens/Restaurant';
import { Cardapio } from '../screens/Cardapio/Mesa1'
import { Cardapio2 } from '../screens/Cardapio/Mesa2'
import { Cardapio3 } from '../screens/Cardapio/Mesa3';
import { MesaPrincipal } from '../screens/Cardapio/MesaPrincipal';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){

    return (

        <Navigator screenOptions={{ headerShown: false }}>
            
            <Screen
                name='homepage'
                component={HomePage}
            />
             <Screen
                name='restaurant'
                component={Restaurant}
            />
            <Screen
                name='mesa1'
                component={Cardapio}
            />
             <Screen
                name='mesa2'
                component={Cardapio2}
            />
            <Screen
                name='mesa3'
                component={Cardapio3}
            />
            <Screen
                name='mesaprincipal'
                component={MesaPrincipal}
            /> 
        </Navigator>
    );
}