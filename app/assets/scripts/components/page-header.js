'use strict';
import React from 'react';
var config = require('../config');

var PageHeader = React.createClass({
  propTypes: {
    // Actions will probably change to a list...
    actions: React.PropTypes.bool,
    pageTitle: React.PropTypes.string,
    bbox: React.PropTypes.array
  },

  renderActions: function () {
    if (this.props.actions) {
      return (
        <div className='page__actions'>
          <ul className='actions-menu'>
            <li><a href={`${config.editorUrl}/#bounds=${this.props.bbox.join('/')}`} className='bttn-edit'>Edit</a></li>
          </ul>
        </div>
      );
    }
  },

  render: function () {
    return (
      <header className='page__header'>
        <div className='inner'>
          <div className='page__headline'>
            <h1 className='page__title'>{this.props.pageTitle}</h1>
          </div>
          {this.renderActions()}
        </div>
      </header>
    );
  }
});

module.exports = PageHeader;
