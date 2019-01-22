import Toast from '../../../extend/dist/toast/toast';
// 广告

var app = getApp()
var temp_adver_img = [];
const citys = {
  '今天': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '明天': ['福州', '厦门', '莆田', '三明', '泉州']
};
Page({

  data: {
    adver_img: [],
    currentTab:1,
    winWidth: 0,
    winHeight: 0,
    sub_hid:false,
    c_closed:true,
    more_flag:true,
    show_c_t: false,
    show_t_w:false,
    show_hsx:false,
    show_xf:false,
    more_arrow:'down',
    activeNames: ['1'],
    columns: [
      {
        values: Object.keys(citys),
        className: 'column1'
      },
      {
        values: citys['浙江'],
        className: 'column2',
        defaultIndex: 2
      }
    ],
    items: [
      {
        // 导航名称
        text: '今天',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '22：00',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '22：20',
            id: 2
          },
          {
            // 名称
            text: '22：00',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '22：20',
            id: 2
          },
          {
            // 名称
            text: '22：00',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '22：20',
            id: 2
          }
        ]
      },
      {
        // 导航名称
        text: '明天',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '11：00',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '11：22',
            id: 2
          }
        ]
      }
    ]
  },

  onLoad: function (options) {
    // 广告
    var that=this

    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    wx.request({
      url: "https://www.leijiangmm.xyz/adver_img",
      method: "GET",
      success: function (res) {
        // console.log(res);


        for (var i = 0; i < res.data.length; i++) {
          var temp_src1 = '' + res.data[i].adver_picpath;
          var temp_src3 = temp_src1.substring(7).replace("\\", "/");
          var temp_src = "https://www.leijiangmm.xyz" + temp_src3;
          var temp_adver_img_child = temp_src;
          temp_adver_img[i] = temp_adver_img_child;
        }


        that.setData({
          adver_img: temp_adver_img
        })
      }
    })
  },
//   test:function(e){
// console.log(e)
//   },

// 立即取件事件选择
  ljqj_qx_f() {
    var that=this
    that.setData({
      show_c_t:false,
      sub_hid:false
    })
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
  ljqj_qd_f() {
    var that = this
    that.setData({
      show_c_t: false,
      sub_hid: false
    })
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  t_w_qx_f(){
    var that = this
    that.setData({
      show_t_w: false,
      sub_hid: false
    })
  },
  t_w_qd_f(){
    var that = this
    that.setData({
      show_t_w: false,
      sub_hid: false
    })
  },
  c_t_w_f:function(){
    var that = this
    that.setData({
      show_t_w: true,
      sub_hid: true
    })
  },
  hsx_qx_f(){
    var that = this
    that.setData({
      show_hsx: false,
      sub_hid: false
    })
  },
  hsx_qd_f(){
    var that = this
    that.setData({
      show_hsx: false,
      sub_hid: false
    })
  },
  xf_qd_f() {
    var that = this
    that.setData({
      show_xf: false,
      sub_hid: false
    })
  },
  xf_qx_f() {
    var that = this
    that.setData({
      show_xf: false,
      sub_hid: false
    })
  },
  xf_f(){
    var that = this
    that.setData({
      show_xf: true,
      sub_hid: true
    })

  },
  more_f(e){
    var that=this
  // console.log(e)
  // console.log(that.data.more_flag)
    that.setData({
      more_flag: !that.data.more_flag,
      more_arrow: that.data.more_arrow=='down'?'':'up'
    });
    if (that.data.more_flag){
      that.setData({

        more_arrow:'down'
      });
    }else{
      that.setData({

        more_arrow: 'up'
      });
    }
  }, 

  onChange(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, citys[values[0]]);
  },
  show_c_t:function(e){
    var that=this
    that.setData({
      show_c_t:true,
      sub_hid:true
    })
  },

  onChange(event) {
    console.log(event)
    this.setData({
      activeNames: event.detail
    });
  },
  // 立即取件
  hsx_f(){
var that=this
that.setData({
  show_hsx: !that.data.show_hsx,
  sub_hid: true,
})
  },
  onClose() {
    this.setData({ show: false });
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, citys[values[0]]);
  },

  tabNav: function (e) {

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var showMode = e.target.dataset.current == 0;
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  stopTouchMove: function () {
    return false;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})