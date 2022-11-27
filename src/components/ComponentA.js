import { PureComponent } from 'react';
import ComponentB from './ComponentB';

export class ComponentA extends PureComponent {
	render() {
		return <ComponentB />
	}
}

export default ComponentA;