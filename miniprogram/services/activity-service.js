class ActivityService {



  constructor() {

    let mockIds = [Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]

    this.mockData = [{
      id: mockIds[0],
      status:'正在进行',
      title: '义务清理街道'+mockIds[0],
      description:'清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,'+
      '清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,'+
      '清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾'+
      '清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾,清理好多好多垃圾',
      organizer:{
        id:0,
        name:'北大博雅'
      },
      participants:[
        {
          id:0,
          nickName:'北大博雅'
        },
        {
          id:1,
          nickName:'志愿者2'
        },
        {
          id:2,
          nickName:'志愿者3'
        }
      ],
      dates:'2019-01-02 ~ 2019-01-13',
      images: ['/static/images/img'+Math.round(Math.random()*3)+'.jpg','/static/images/img'+Math.round(Math.random()*3)+'.jpg','/static/images/img'+Math.round(Math.random()*3)+'.jpg'
      ,'/static/images/img'+Math.round(Math.random()*3)+'.jpg'
    ],
    },
    {
      id: mockIds[1],
      status:'正在进行',
      title: '义务英语教育'+mockIds[1],
      description:'教育好多好多人,教育好多好多人,教育好多好多人,教育好多好多人',
      organizer:{
        id:0,
        name:'北大博雅'
      },
      participants:[],
      dates:'2019-01-02 ~ 2019-01-13',
      images: ['/static/images/img'+Math.round(Math.random()*3)+'.jpg'],
    },
    {
      id: mockIds[2],
      status:'正在进行',
      title: '义务英语教育'+mockIds[2],
      description:'教育好多好多人,教育好多好多人,教育好多好多人,教育好多好多人',
      organizer:{
        id:0,
        name:'北大博雅'
      },
      participants:[],
      dates:'2019-01-02 ~ 2019-01-13',
      images: ['/static/images/img'+Math.round(Math.random()*3)+'.jpg'],
    },
    {
      id: mockIds[3],
      status:'已经结束',
      title: '义务数学教育'+mockIds[0],
      description:'教育好多好多人,教育好多好多人,教育好多好多人,教育好多好多人',
      organizer:{
        id:0,
        name:'北大博雅'
      },
      participants:[],
      dates:'2019-01-02 ~ 2019-01-13',
      images: ['/static/images/img'+Math.round(Math.random()*3)+'.jpg'],
    },
    {
      id: mockIds[4],
      status:'已经结束',
      title: '义务英语教育'+mockIds[0],
      description:'教育好多好多人,教育好多好多人,教育好多好多人,教育好多好多人',
      organizer:{
        id:0,
        name:'北大博雅'
      },
      participants:[],
      dates:'2019-01-02 ~ 2019-01-13',
      images: ['/static/images/img'+Math.round(Math.random()*3)+'.jpg'],
    }
    ]
  }

  find() {
    return new Promise(function (resolve) {
      resolve(this.mockData);
    }.bind(this))
  }

  get(id) {
    return new Promise(function (resolve) {
      resolve(this.mockData[0]);
    }.bind(this))
  }

  add(activity) {
    if(!activity.id){
      activity.id = Math.round(Math.random()*100);
    }

    if(!activity.participants){
      activity.participants = [];
    }

    activity.organizer = {
      id:0,
      name:'我发布的'
    }

    activity.dates=activity.startDate +' ~ ' +activity.endDate;

    activity.images=['/static/images/img'+Math.round(Math.random()*3)+'.jpg','/static/images/img'+Math.round(Math.random()*3)+'.jpg','/static/images/img'+Math.round(Math.random()*3)+'.jpg'];

    this.mockData.push(activity);

    return new Promise(function(resolve){
      resolve({
        success:true,
        message:'添加活动成功'
      })
    });
  }

  signup(id,userInfo){
    this.mockData[0].participants.push(userInfo);

    return new Promise(function (resolve) {
      resolve({
        success:true,
        message:"报名成功"
      });
    }.bind(this))
  }

}

module.exports = new ActivityService();