const app = getApp()
const activityService = require('/../../../services/activity-service.js')

Page({
  data: {
    activity: {},
    flexed: false
  },
  onLoad: function (param) {
   var id=param.id;
   activityService.get(id).then(function(response){
    this.setData({
      activity: response
    })
   }.bind(this))   
  },
  flex: function () {
    this.setData({
      flexed: !this.data.flexed
    })
  }
})