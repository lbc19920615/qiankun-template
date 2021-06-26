<style lang="scss" scoped>
.mutil-file-upload {
  &__file-list-item {
    i, span, a {
      color:#55a8fd;
    }
    .link-url-con {
     margin:0 50px 0 10px;font-size:13px
    }
    .link-remove-action {
      cursor: pointer;
    }
  }
}
</style>

<template>
  <!-- 文件上传，可点击下载 -->
  <div class="mutil-file-upload">
    <el-upload
      class="mutil-file-upload__uploader"
      :show-file-list="false"
      :action="uploadUrl"
      :file-list="fileList"
      :http-request="handleUploadRequest"
    >
      <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button>
      <div slot="tip" class="el-upload__tip"><slot name="tip"></slot></div>
    </el-upload>
    <div
      class="mutil-file-upload__file-list"
    >
      <div
        v-for="(item,index) in sonFileList"
        :key="index"
        class="mutil-file-upload__file-list-item"
      >
        <el-popover
          placement="top-start"
          title
          width="200"
          trigger="hover"
          content="点击文件可以下载当前文件"
        >
          <i
            slot="reference"
            class="el-icon-document"
          ></i>
        </el-popover>
        <span class="link-url-con">
          <a
            :href="item.url"
            target="_blank"
          >{{ item.name }}</a>
        </span>
        <i
          class="el-icon-circle-close link-remove-action"
          @click="deleteFile(index)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MutliFileUpload',
  components: {},
  props: {
    // 文件上传类型，如区分不同验收项目
    fileType: {
      type: String,
      default: ''
    },
    // 文件上传的列表
    fileList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      uploadUrl: '', // 上传地址
      sonFileList: [] // 文件列表
    }
  },
  computed: {},
  watch: {
    // 监测变化
    fileList: function(val) {
      this.sonFileList = this.fileList
    }
  },
  mounted() {
    this.sonFileList = this.fileList
    // console.log("子接收文件：", this.sonFileList)
  },
  methods: {
    // 上传图片
    handleUploadRequest(fileOption) {
      console.log('111', fileOption)
      var filename = fileOption.file.name
      console.log('文件名称1', filename)
      const uploadFile = fileOption.file
      const formData = new FormData()
      formData.append('file', uploadFile)
      const oneFile = {
        name: filename,
        url: 'https://www.baidu.com'
      }
      this.sonFileList.push(oneFile)

      // fileUploadOne(formData)
      //   .then((res) => {
      //     if (res.success == true) {
      //       this.$message.success('上传成功！')
      //       const oneFile = {
      //         name: filename,
      //         url: res.data
      //       }
      //       this.sonFileList.push(oneFile)
      //       console.log('this.sonFileList', this.sonFileList)
      //       this.$emit('sendFiles', this.sonFileList)
      //     } else {
      //       this.$message.error('上传图片失败！')
      //     }
      //   })
      //   .catch((error) => {
      //     this.$message.error('系统错误！')
      //   })
    },
    // 移除文件
    deleteFile(index) {
      console.log(index)
      this.sonFileList.splice(index, 1)
      this.$emit('sendFiles', this.sonFileList)
    }
  }
}
</script>
