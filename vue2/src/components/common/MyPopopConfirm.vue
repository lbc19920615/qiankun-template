<template>
  <el-popover
    v-model="visible"
    v-bind="$attrs"
    trigger="click"
  >
    <div class="el-popconfirm">
      <p class="el-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="el-popconfirm__icon"
          :style="{color: iconColor}"
        />
        {{ title }}
      </p>
      <div class="el-popconfirm__action">
        <el-button
          size="mini"
          :type="cancelButtonType"
          @click="cancel"
        >
          {{ cancelButtonText }}
        </el-button>
        <el-button
          size="mini"
          :type="confirmButtonType"
          @click="confirm"
        >
          {{ confirmButtonText }}
        </el-button>
      </div>
    </div>
    <slot slot="reference" name="reference" />
  </el-popover>
</template>

<script>
import ElPopover from 'element-ui/packages/popover'
import ElButton from 'element-ui/packages/button'
import { t } from 'element-ui/src/locale'

export default {
  name: 'MyPopopConfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String,
      default: t('el.popconfirm.confirmButtonText')
    },
    cancelButtonText: {
      type: String,
      default: t('el.popconfirm.cancelButtonText')
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'el-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElPopover,
    ElButton
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    confirm() {
      this.visible = false
      this.$emit('confirm')
    },
    cancel() {
      this.visible = false
      this.$emit('cancel')
    }
  }
}
</script>
