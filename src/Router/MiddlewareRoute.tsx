import React from 'react'
import { MiddlewareType } from './routes'

type MiddlewareRouteProps = {
  children: React.JSX.Element,
  middleware: MiddlewareType
}

const MiddlewareRoute: React.FC<MiddlewareRouteProps> = ({ children }) => children

export default MiddlewareRoute