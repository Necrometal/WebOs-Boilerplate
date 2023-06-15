import kind from "@enact/core/kind";

const NotFoundView = kind({
  name: 'NotFoundView',
  render: (props) => (
    <div {...props}>
      <h1>View Not Found</h1>
    </div>
  )
})

export default NotFoundView