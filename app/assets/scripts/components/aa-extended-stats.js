'use strict';
import React from 'react';
import PieChart from './charts/pie-chart';

var AAExtendedStats = React.createClass({
  displayName: 'AAExtendedStats',

  propTypes: {
    level: React.PropTypes.number,
    stats: React.PropTypes.object,
    fetched: React.PropTypes.bool,
    fetching: React.PropTypes.bool
  },

  chartPopoverContent: function (d) {
    return <pre>{JSON.stringify(d, null, 1)}</pre>;
  },

  render: function () {
    if (!this.props.fetched && !this.props.fetching) {
      // Handle better.
      return null;
    }
    let stats = this.props.stats.stats;

    return (
      <div className='aa-stats-wrapper'>

        <div className='aa-stats-row'>
          <div className='aa-stats aa-stats--extent'>
            <h2 className='aa-stats__title'>Extent (Roads mapped)</h2>
            <div className='aa-stats__contents'>
              <ul className='aa-stats__list'>
                <li className='aa-stats__element'>
                  <p className='aa-stat__value'><strong>100%</strong>National</p>
                  <ul className='progress-bar progress-bar--high'><li style={{width: '100%'}}><span className='value'>217,456Km</span></li></ul>
                </li>
                <li className='aa-stats__element'>
                  <p className='aa-stat__value'><strong>18%</strong>Local</p>
                  <ul className='progress-bar progress-bar--low'><li style={{width: '18%'}}><span className='value'>50,456Km</span></li></ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='aa-stats-row'>
          <div className='aa-stats aa-stats--condition'>
            <h2 className='aa-stats__title'>Condition</h2>
            <div className='aa-stats__contents'>
              {this.props.fetching ? <p>Loading data</p>
                : this.props.fetched ? <PieChart popoverContentFn={this.chartPopoverContent} data={stats.or_condition} className='piechart'/> : null}
            </div>
          </div>

          <div className='aa-stats aa-stats--responsibility'>
            <h2 className='aa-stats__title'>Responsibility</h2>
            <div className='aa-stats__contents'>
              {this.props.fetching ? <p>Loading data</p>
                : this.props.fetched ? <PieChart popoverContentFn={this.chartPopoverContent} data={stats.or_rdclass} className='piechart'/> : null}
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = AAExtendedStats;