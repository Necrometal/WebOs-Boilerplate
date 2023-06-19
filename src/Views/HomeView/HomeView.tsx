import kind from "@enact/core/kind";
import Button from 'react-bootstrap/Button';

const HomeView = kind({
  name: 'HomeView',
  render: (props) => (
    <div {...props}>
      <h1>Home View</h1>
      <Button className="spottable" tabIndex={-1}>teetts</Button>
    </div>
  )
})

export default HomeView