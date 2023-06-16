import kind from "@enact/core/kind";

const RegisterView = kind({
  name: 'RegisterView',
  render: (props) => (
    <div {...props}>
      <h1>Register View</h1>
    </div>
  )
})

export default RegisterView