const app = getApp();

// import city from '../../common/lib/city';
import tips from '../../common/lib/tips';
const activityService = require('/../../services/activity-service.js')

const formFields = [{
  name:'title',
  description:'活动名称',
  validates:['not-empty']
},{
  name:'status',
  description:'活动状态',
  validates:['not-empty']
},{
  name:'address',
  description:'活动地点',
  validates:['not-empty']
},{
  name:'startDate',
  description:'开始日期',
  validates:['not-empty']
},{
  name:'endDate',
  description:'结束日期',
  validates:['not-empty']
},{
  name:'description',
  description:'描述',
  validates:['not-empty']
},{
  name:'numberLimit',
  description:'人数上限',
  validates:['not-empty']
}
]

Page({
  data: {
    loading: true,
    form: {
      
    },
    index: 0,
    tipsData: {
      title: '',
      isHidden: true
    }
  },
  onLoad(params) {
    formFields.forEach(function(field){
      this[field.name+'Input'] = function(e){
        var key = field.name;
        this.data['form'][key] = e.detail.value;
      }
    }.bind(this))    

    // if (options.id) {
      
    // } else {
    //     city.init(this);
    // }
     
  },
  showToast(title, duartion) {
    const that = this;
    const tipsData = {
      title: title || '',
      duartion: duartion || 2000,
      isHidden: false
    };
    tips.toast(that.data.tipsData);
    that.setData({
      tipsData
    });
    setTimeout(() => {
      tipsData.isHidden = true;
      that.setData({
        tipsData
      });
    }, tipsData.duartion);
  },
  submitBtn() {
    const that = this;
    var activity = this.data.form;
    if (!activity.title) { that.showToast('活动名称不能为空'); return; }

    activityService.add(activity).then(function(response){
      if (response.success){
        that.showToast('发布活动成功');

        setTimeout(function(){
          var pages = getCurrentPages();
          pages[pages.length-1].onLoad();
          wx.switchTab({
            url: '/pages/index/index'
          })
        }.bind(this),1000)
      }else{
        that.showToast('发布活动失败'+response.message);
      }
    });

  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    });
  }
});