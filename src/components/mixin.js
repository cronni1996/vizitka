const globalMixin = {
    beforeRouteEnter (to, from, next) {
        const transitionName = to.meta.transition
        if (transitionName) {
            document.body.classList.add(`transition-${transitionName}`)
        }
        next()
    },
    beforeRouteLeave (to, from, next) {
        const transitionName = from.meta.transition
        if (transitionName) {
            document.body.classList.add(`transition-${transitionName}-leave`)
        }
        next()
    }
}

Vue.mixin(globalMixin)