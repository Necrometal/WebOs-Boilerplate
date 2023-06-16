type RoutePathType = {
  key: string,
  path: string
}

type RoutePathListType = {
  [key: string]: RoutePathType
}

const ROUTE_PATH: RoutePathListType = {
  home: {
    key: 'Home',
    path: '/'
  },
  about: {
    key: 'About',
    path: '/about'
  },
  notfound: {
    key: 'NotFound',
    path: '*'
  },
  login: {
    key: 'Login',
    path: '/login'
  },
  register: {
    key: 'Register',
    path: '/register'
  }
}

export default ROUTE_PATH