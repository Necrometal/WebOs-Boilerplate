import kind from "@enact/core/kind";
import { Outlet } from "react-router-dom";
import { Panel } from "@enact/sandstone/Panels";

const CredentialNavigation = kind({
  name: 'CredentialNavigation',
  render: (props) => (
    <Panel {...props}>
      <Outlet />
    </Panel>
  )
})

export default CredentialNavigation