import { Component } from 'react';
import { content } from './Content'

class Footer extends Component {
  render() {
    let text = content[window.language]['footer']
    return (
      <footer>
        <div className="footer-inner">
          {text['copyright']}
        </div>
      </footer>
    );
  }
}

export { Footer }
