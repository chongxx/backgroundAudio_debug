const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    let audio_1 = 'https://cdn.afterclass.cn/upload/audio/media_5b02bb3d195175.51324402.mp3';

    // onCanPlay会等很久才回调的链接
    let audio_2 = 'https://cdn.afterclass.cn/upload/audio/media_5b319c03d23277.24103798.mp3';
    this.initAudio(audio_2);
  },
  initAudio(audio_url) {
    this.setData({
      init_date: 'Time of initialization -> ' + this.getCurrentDate(),
    });

    this.audio = wx.getBackgroundAudioManager();
    this.audio.title = '此时此刻'
    this.audio.epname = '此时此刻'
    this.audio.singer = '许巍'
    this.audio.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    this.audio.src = audio_url;
    this.audio.onPlay(e => { });
    this.audio.onCanplay(() => {
      this.setData({
        can_play_date: 'Time of can play -> ' + this.getCurrentDate(),
      });
    });
  },

  getCurrentDate() {
    let date = new Date();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let currentTime = hour + "时" + minute + "分" + second + "秒 ";
    return currentTime;
  },
})
