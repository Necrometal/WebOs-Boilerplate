import { RouterProvider } from 'react-router-dom';
import Router from '../Router';
import LunaContext from '../Context/L2SRequest';
import LS2Request from '@enact/webos/LS2Request';

const LunaService = new LS2Request()

const App = () => (
  <LunaContext.Provider value={LunaService}>
    <RouterProvider router={Router}/>
  </LunaContext.Provider>
)

export default (App);
