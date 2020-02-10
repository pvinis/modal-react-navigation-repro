import React, { useContext, useState } from 'react'
import { View, Button, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const AuthContext = React.createContext(false)

const Onboarding = () => {
	const navigation = useNavigation()

	return (
		<View style={{ flex: 1 }}>
			<Text>Onboarding</Text>
			<Button title='go to log in' onPress={() => navigation.navigate('login')} />
		</View>
	)
}

const Login = () => {
	const { setLoggedIn } = useContext(AuthContext)

	return (
		<View style={{ flex: 1 }}>
			<Text>Login</Text>
			<Button title='log in' onPress={() => setLoggedIn(true)} />
		</View>
	)
}

const AStack = createStackNavigator()
const AuthStack = () => (
	<AStack.Navigator>
		<AStack.Screen name='onboarding' component={Onboarding} />
		<AStack.Screen name='login' component={Login} />
	</AStack.Navigator>
)

const Something = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text>Something</Text>
		</View>
	)
}

const Home = () => {
	const navigation = useNavigation()
	const { setLoggedIn } = useContext(AuthContext)

	return (
		<View style={{ flex: 1 }}>
			<Text>Home</Text>
			<Button title='go to something' onPress={() => navigation.navigate('something')} />
			<Button title='go to modal' onPress={() => navigation.navigate('modal')} />
			<Button title='log out' onPress={() => setLoggedIn(false)} />
		</View>
	)
}

const MStack = createStackNavigator()
const MainStack = () => (
	<MStack.Navigator>
		<MStack.Screen name='home' component={Home} />
		<MStack.Screen name='something' component={Something} />
	</MStack.Navigator>
)

const Modal = () => {
	const navigation = useNavigation()

	return (
		<View style={{ flex: 1, marginTop: 60 }}>
			<Text>I am the Modal</Text>
			<Button title='close' onPress={() => navigation.goBack()} />
		</View>
	)
}

const MMStack = createStackNavigator()
const MainStackWithModal = () => (
	<MMStack.Navigator mode='modal' headerMode='none' >
		<MMStack.Screen name='mainstack' component={MainStack} />
		<MMStack.Screen name='modal' component={Modal} />
	</MMStack.Navigator>
)

const MainApp = () => {
	const { loggedIn } = useContext(AuthContext)

	return loggedIn
		? <MainStackWithModal />
		: <AuthStack />
}

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	return (
		<AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
			<NavigationContainer>
				<MainApp />
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
export default App
