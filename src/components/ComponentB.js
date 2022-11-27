import { PureComponent } from 'react';
import ComponentC from './ComponentC';

export class ComponentB extends PureComponent {
	render() {
		return <ComponentC />
	}
}

export default ComponentB;