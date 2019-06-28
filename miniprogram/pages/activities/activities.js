const app = getApp()
const activityService = require('/../../services/activity-service.js')

var event = require('../../utils/event')

var pageConfig = {
  data: {
    head: {
    },

    indexData: {},
    counts: 10,
    start: 0
  },
  onLoad: function() {

  },
  onShow: function() {
    activityService.find(this.data.start, this.data.counts).then(function(response) {
      this.setData({
        'indexData.activities': response,
        start: this.data.start + this.data.counts
      })
    }.bind(this));
  },

  onReachBottom: function() {
    activityService.find(this.data.start, this.data.counts).then(function(response) {
      console.info('getting new page')
      let newList = this.data.indexData.activities.concat(response)
      this.setData({
        'indexData.activities': newList,
        start: this.data.start + this.data.counts
      })
    }.bind(this));
  }
}

Page(pageConfig)

module.exports = pageConfig;