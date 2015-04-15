'use strict';

var BaseView = require('./base-view.js');
var dataTable = require('datatables');
var $ = require('jquery');
$.DataTable = dataTable;

module.exports = BaseView.extend({
  template: require('../templates/projects.html'),
  render: function() {
    var model = this.model ? this.model.attributes : {};
    if (!model.type) {
      return this;
    }
    console.log(model);

    try {
      this.$el.html(this.template(model));
    } catch (e) {
      console.error(e);
    }

    // this.$('.table').dataTable({ 'pageLength': 25 });
    return this;

  },
});
