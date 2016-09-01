!function(root, name, make) {
  typeof module != 'undefined' && module.exports ? module.exports = make() : root[name] = make()
}(this, 'admit', function() {

  function is(a, b) {
    return a === b
  }

  function use(is) {
    var push = [].push

    function admit(stack, value) {
      has(stack, value) || push.call(stack, value)
      return stack
    }

    function has(stack, value) {
      for (var i = 0, l = stack.length; i < l;) {
        if (is(stack[i++], value)) return true
      }
      return false
    }

    function ban(stack, value) {
      var temp = [], i = 0, pop = temp.pop
      while (stack.length) temp[i++] = pop.call(stack)
      while (i--) is(temp[i], value) || push.call(stack, temp[i])
      return stack
    }

    admit.is = is
    admit.has = has
    admit.ban = ban
    admit.use = use
    admit.admit = admit
    return admit
  }

  return use(is)
});
