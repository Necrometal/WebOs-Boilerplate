import kind from "@enact/core/kind";
import Panels, { Panel } from "@enact/sandstone/Panels";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import React, { FocusEvent, ReactNode } from "react";

interface PanelProviderProps {
  children: ReactNode | React.JSX.Element
}

const scrollTo = (e: FocusEvent<HTMLElement, Element>) => {
  e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const PanelProvider = kind<PanelProviderProps>({
  name: 'PanelProvider',
  render: ({ children, ...rest }) => (
    <Panels {...rest} onFocus={scrollTo}>
      <Panel>
        {children}
      </Panel>
    </Panels>
  )
})

export default ThemeDecorator(PanelProvider)