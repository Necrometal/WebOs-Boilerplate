import kind from "@enact/core/kind";
import { NavLink, Outlet } from "react-router-dom";
import css from './style.module.less'
import PanelProvider from "../PanelProvider/PanelProvider";

const Navigation = kind({
  name: 'Navigation',
  styles : {
    css,
    className: 'main'
  },
  render: (props) => (
    <PanelProvider {...props}>
      <div>
        <NavLink className='spottable' tabIndex={-1} to="/" >Home</NavLink>
        <NavLink className='spottable' tabIndex={-1} to="/about">About</NavLink>
        <NavLink className='spottable' tabIndex={-1} to="/login">Login</NavLink>
        <NavLink className='spottable' tabIndex={-1} to="/register">Register</NavLink>
      </div>
      <Outlet />
    </PanelProvider>
  )
})

export default Navigation