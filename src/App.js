import { PureComponent } from 'react'
import ComponentA from './components/ComponentA'
import { UserProvider } from './context/userContext';

class App extends PureComponent {
	render() {
		return (
			<UserProvider value="MilKam-Prop">
				<ComponentA />
			</UserProvider>
		);
	}
}

export default App;