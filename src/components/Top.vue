<template>
  <div id="top">
    <el-row>
      <el-col :span="4">
        <el-select v-model="value" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="11">
        <div>
          <el-input placeholder="请输入链接" :clearable="true" v-model="input"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="getData">开始解析</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import request from "@/request/request";

export default {
  name: "top",
  data () {
    return {
      msg: "hello",
      input: "",
      options: ['芒果TV', "腾讯视频", "爱奇艺"],
      value: "芒果TV"
    }
  },
  methods: {
    getData () {
      console.log('开始解析');
      this.$jsonp('http://api.lacknb.cn/mgtv?url=' + this.input).then(res => {
        console.log(res)
        this.$store.dispatch('changeInfo', res)
      }).catch(err => {
        this.$message(err.message)
      })
    }
  }
}
</script>

<style scoped>
  #top {
    margin: 3% auto;
    width: 50%;
  }
</style>