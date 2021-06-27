<script>
export default {
  name: 'FreeRender',
  functional: true,
  props: {
    // eslint-disable-next-line vue/require-default-prop
    scope: Object,
    // eslint-disable-next-line vue/require-default-prop
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render ? ctx.props.render(h, ctx.props.scope, ctx) : ''
  }
}
</script>
