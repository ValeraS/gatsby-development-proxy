import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import Layout from '../components/layout'
import Image from '../components/image'

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const response = await axios.get('api/data');
      this.setState({ data: response.data });
    } catch (err) {
      this.setState({ data: 'Error!!!' });
    }
  }

  render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <p>Data: {this.state.data}</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
