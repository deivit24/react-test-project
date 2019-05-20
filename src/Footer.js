import React from 'react';
import './App.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="https://getbootstrap.com/">Back to top</a>
            </p>
            <p>
              Album example is &copy; Bootstrap, but please download and
              customize it for yourself!
            </p>
            <p>
              New to Bootstrap?{' '}
              <a href="https://getbootstrap.com/">Visit the homepage</a> or read
              our{' '}
              <a href="/docs/4.3/getting-started/introduction/">
                getting started guide
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
