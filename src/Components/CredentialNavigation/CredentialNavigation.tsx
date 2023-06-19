import kind from "@enact/core/kind";
import { Outlet } from "react-router-dom";
import PanelProvider from "../PanelProvider/PanelProvider";

const CredentialNavigation = kind({
  name: 'CredentialNavigation',
  render: (props) => (
    <PanelProvider { ...props }>
      <Outlet />
    </PanelProvider>
  )
})

export default CredentialNavigation