import lf from 'lf'

export default {
  data () {
    return {
      statusbarHeight: 0,
      actionbarHeight: 0
    }
  },
  methods: {
    navigateTo (url, Boolean) {
      if (window.sbk && window.sbk.startFullH5Page) {
        let href = window.location.href
        href = href.substring(0, href.lastIndexOf('#') + 1)
        href = `${href}/${url}`
        window.sbk.startFullH5Page(href, Boolean)
        return
      }
      this.$router.push(url)
    },
    startAuctionPage () {
      if (window.sbk && window.sbk.startAuctionPage) {
        window.sbk.startAuctionPage()
      }
    },
    comebackPage () {
      if (window.sbk && window.sbk.onBackPressed) {
        window.sbk.onBackPressed()
      }
    },
    doBgForBarHeight (el) {
      if (!this.statusbarHeight) {
        return
      }
      var cssEl = document.defaultView.getComputedStyle(el, null);
      const oldH = cssEl.height.replace(/px/, '')
      const newH = Number(oldH) + Number(this.statusbarHeight)
      el.style.height = newH + 'px'
    }
  },
  beforeMount () {
    console.log(this.statusbarHeight)
    console.log(this.actionbarHeight)
    const params = this.$route.query
    if (params && params.statusbarHeight) {
      this.statusbarHeight = params.statusbarHeight
    }
    if (params && params.actionbarHeight) {
      this.actionbarHeight = params.actionbarHeight
    }
    console.log(this.actionbarHeight)
    if (window.sbk && window.sbk.jsToMobileLogcat) {
      window.sbk.jsToMobileLogcat(this.statusbarHeight)
    }
  }
}
