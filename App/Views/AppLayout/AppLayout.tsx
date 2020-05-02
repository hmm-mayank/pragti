import 'react-native-gesture-handler';
import React, { useState, Suspense } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainAppFooter = React.lazy(() => import('../AppFooter/AppFooter'));
const AppHeader = React.lazy(() => import('../AppHeader/AppHeader'));
const AppContent = React.lazy(() => import('../AppContent/AppContent'));
const ProductDetails = React.lazy(() =>
  import('../ProductDetail/ProductDetail'),
);

let productCount = 0;
const Stack = createStackNavigator();
const AppLayout = () => {
  const [addProduct, setAddProduct] = useState(true);
  const [cout, setCount] = useState(0);
  const [isFooter, setFooter] = useState(true);

  const AddProduct = () => {
    setAddProduct(false);
    setCount(cout + 1);
  };

  return (
    <Suspense fallback={<Text>Loading</Text>}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#eeeeee',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={AppContent}
            options={{ headerTitle: (props) => <AppHeader titleName="Home" /> }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetails}
            options={({ route }) => ({
              headerTitle: <Text>{route.params['name']}</Text>,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <MainAppFooter />
    </Suspense>
  );
};

export default AppLayout;
