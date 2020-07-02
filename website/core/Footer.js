/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                />
              )}
            </a>
          </div>
          <div>
            <h5>Documentation</h5>
            <a
              href={this.docUrl('metadata-management')}
              target="_blank"
              rel="noreferrer noopener">
              User Guide
            </a>
            <a
              href={this.docUrl('installation')}
              target="_blank"
              rel="noreferrer noopener">
              Installation Guide
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="http://discuss.metamapper.io"
              target="_blank"
              rel="noreferrer noopener">
              Discussion
            </a>
            <a href={this.props.config.repoUrl}>GitHub</a>
           </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
