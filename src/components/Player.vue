<template>
  <div style="width: 100%; height: 100%">
    <d-player @play="playVideo" :options="options" ref="player" >
<!--      https://www.mgtv.com/b/348145/11564191.html?lastp=list_index-->
    </d-player>
  </div>
</template>

<script>

import VueDPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css'
// import {mapGetters} from 'vuex'
/*
* computed: {
*   ...mapGetters([
*     'getOptions'
*   ])
* }
* */

export default {
  name: "Player",

  data () {
    return {
      options: {
        video: {
          type: 'auto',
          url: '111',
          pic: 'https://p.upyun.com/demo/tmp/ozUwnELl.webp'
        },
        hlsjsConfig: {
            p2pConfig: {
                logLevel: true,
                live: false,
            }
        },
        preload: 'auto',
        hotkey: true,
        screenshot: true,
        autoplay: true,
        contextmenu: [
          {
            text: 'GitHub',
            link: 'https://github.com/MoePlayer/vue-dplayer'
          }
        ],
        // danmaku: {
        //     id: '9E2E3368B56CDBB4',
        //     api: '',
        //     token: 'tokendemo',
        //     maximum: 1000,
        //     addition: [''],
        //     user: 'DIYgod',
        //     bottom: '15%',
        //     unlimited: true,
        // }
      },
    }
  },
  components: {
    'd-player': VueDPlayer
  },
  methods: {
    playVideo() {
      console.log('play callback')
      this.repeatInit()
    },
    repeatInit () {
        this.$store.dispatch('initPlayer', this.$refs.player.dp);
    }
  },
  created() {
    console.log("route data: " + this.$route.query.url)
    let url = location.href.split("url=")[1];
    url = decodeURIComponent(url);
    console.log("url: " + url)
    this.options.video.url = url;
    // this.options.video.url = this.$route.query.url
  },
  computed: {
  },
  mounted() {
    // 初始化播放器实例
    this.$store.dispatch('initPlayer', this.$refs.player.dp)
    // this.player = this.$refs.player.dp
  }
}
</script>

<style>

</style>

<!--
https://pcvideocmnetzte.titan.mgtv.com/c1/2021/04/25_0/32D88424EBFA39848F3D943F585579E6_20210425_1_1_537.mp4
?arange=0&pm=qz5kmuBi80Pv9_gSW8ONiokP7KYXLm_oQIZMu7xf2VE5i94254QhlEMOUtdzerA~RpccgzQCGpTZ65~S3P4C1h7C4K600Xwd3~2uFQBVnw1DHmpuunInqRQY75iKTyvfvW_SNmrPcn7qV975DSwWTyDjcu0xTIk1HmpJ70Nv7kpiqKjz0~VXf5yoye8Q7uqAe8iP7WxtQfVoXUcfK0o_P7NkaJBTgA40ZIMziKTlT0lS_eUmsZmw4obKQwx61vp7AAQJIMyFajvsB5PCd~d583JnIH2rJBHTB4kxB8CbFYSqsdRrmoVwPSkmJcpifYT3CqQYS4TTW4hIKRo4DghjWXC4KYMpP5FQipX95AmcQhhMLAACScKNd_ZpC_LBQKN9UKIjT01rjlTFDZmnGgrqy~lBRo_zvNUrZeBNTQlOrfyTpTK9gMeT~oMVi6R9Qw3aEUpSFj2zRvWJB2~ZIjQcYgcPKUT_X9_EIPWk81rk0EItLc19kGZWrA--&mr=rpCVGlAgUPBtsgIMpmlgXCbFuR4hpqR3M3nmUxYXVrdZpU8nViW0AjdqtCjd9wjbHV5gwf91uKS~10Mudt4jVTtAp2XvHWoKfOSMs9UfRrt4UCsIu4Navtw3V7TEAufkDmHq2w7NZjuS4ToJDtzwqUpvg4xRY1vNHmXw6QETeA7a5g0_NYYqQBiixcqy8sncLLb8h7oZfA5_BIio4faTn86wRxICZ1mHoqkFFA--&svrip=111.6.252.253&uid=1385479131248185344&vcdn=0&scid=25050&cpno=6j07ml&ruid=f0ea97f471664ed4&clit=1619345748&did=063921bc-45c5-461b-8b91-78903d2342e6&suuid=92081DBF-A257-4A55-A86F-6C2196FB4D12
-->