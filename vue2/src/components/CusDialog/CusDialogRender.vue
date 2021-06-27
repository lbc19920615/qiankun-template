<script>
export default {
  name: 'CusDialogRender',
  functional: true,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props.scope) : ''
  }
}
</script>
