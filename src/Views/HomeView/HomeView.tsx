import kind from "@enact/core/kind";

const HomeView = kind({
  name: 'HomeView',
  render: (props) => (
    <div {...props}>
      <h1>Home View</h1>
    </div>
  )
})

export default HomeView