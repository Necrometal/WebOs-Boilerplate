import React from "react";
import { AUTH_MIDDLEWARE, UNAUTH_MIDDLEWARE } from "../Constantes/middleware";
import HomeView from "../Views/HomeView";
import NotFoundView from "../Views/NotFoundView";
import LoginView from "../Views/LoginView";
import ROUTE_PATH from '../Constantes/routes'
import AboutView from "../Views/AboutView";

export type MiddlewareType = typeof AUTH_MIDDLEWARE | typeof UNAUTH_MIDDLEWARE | null

export type RouteType = {
  key: string,
  path: string,
  component: React.ComponentType<any>,
  middleware: MiddlewareType
}

export const routes: RouteType[] = [
  {
    key: ROUTE_PATH.home.key,
    path: ROUTE_PATH.home.path,
    component: HomeView,
    middleware: AUTH_MIDDLEWARE,
  },
  {
    key: ROUTE_PATH.about.key,
    path: ROUTE_PATH.about.path,
    component: AboutView,
    middleware: AUTH_MIDDLEWARE,
  },
  {
    key: ROUTE_PATH.notfound.key,
    path: ROUTE_PATH.notfound.path,
    component: NotFoundView,
    middleware: null,
  },
]

export const credentialRoutes: RouteType[] = [
  {
    key: ROUTE_PATH.login.key,
    path: ROUTE_PATH.login.path,
    component: LoginView,
    middleware: UNAUTH_MIDDLEWARE,
  },
  {
    key: ROUTE_PATH.register.key,
    path: ROUTE_PATH.register.path,
    component: LoginView,
    middleware: UNAUTH_MIDDLEWARE,
  }
]