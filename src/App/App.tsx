import kind from '@enact/core/kind';
import Panels from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { RouterProvider } from 'react-router-dom';
import Router from '../Router';
import { FocusEvent } from "react";

const scrollTo = (e: FocusEvent<HTMLElement, Element>) => {
  e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const App = kind({
	name: 'App',

	render: (props) => (
		<Panels 
      {...props} 
      onFocus={scrollTo} 
    >
      <RouterProvider router={Router} {...props}/>
    </Panels>
	)
});

export default ThemeDecorator(App);
