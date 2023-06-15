import kind from "@enact/core/kind";

interface Props {
  title: string;
}

const AboutView = kind<Props>({
  name: 'AboutView',
  render: (props) => (
    <div {...props}>
      <h1>About View</h1>
    </div>
  )
})

export default AboutView