import { Route, createHashRouter, createRoutesFromElements } from "react-router-dom";
import ROUTE_PATH from "../Constantes/routes";
import Navigation from "../Components/Navigation";
import { credentialRoutes, routes } from "./routes";
import MiddlewareRoute from "./MiddlewareRoute";
import CredentialNavigation from "../Components/CredentialNavigation";

const Router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE_PATH.home.path} element={<Navigation />}>
        {
          routes.map(item => {
            const { key, path, middleware, component: Component } = item

            return (
              <Route
                key={key}
                path={path}
                element={
                  <MiddlewareRoute middleware={middleware}>
                    <Component />
                  </MiddlewareRoute>
                }
              />
            )
          })
        }
      </Route>

      <Route path={ROUTE_PATH.home.path} element={<CredentialNavigation />}>
        {
          credentialRoutes.map(item => {
            const { key, path, middleware, component: Component } = item

            return (
              <Route
                key={key}
                path={path}
                element={
                  <MiddlewareRoute middleware={middleware}>
                    <Component />
                  </MiddlewareRoute>
                }
              />
            )
          })
        }
      </Route>
    </>
  )
)

export default Router