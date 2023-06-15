import kind from "@enact/core/kind";

const LoginView = kind({
  name: 'LoginView',
  render: (props) => (
    <div {...props}>
      <h1>Login View</h1>
    </div>
  )
})

export default LoginView