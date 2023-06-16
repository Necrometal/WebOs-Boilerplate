import kind from '@enact/core/kind';
import Panels from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { RouterProvider } from 'react-router-dom';
import Router from '../Router';

const App = kind({
	name: 'App',

	render: (props) => (
		<Panels {...props}>
      <RouterProvider router={Router} {...props}/>
    </Panels>
	)
});

export default ThemeDecorator(App);
