;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jirengulogojichu1" viewBox="0 0 1079 1024">' +
    '' +
    '<path d="M89.576642 734.832117l-28.379562-7.474453c12.846715-32.350365 11.328467-107.912409 5.255475-148.671533l70.423357 26.861314s-18.569343 31.766423-27.912408 55.941606c-10.510949 26.978102-17.985401 71.591241-19.386862 73.343066z" fill="" ></path>' +
    '' +
    '<path d="M152.875912 611.854015l-16 53.722627 105.459854 10.394161-50.686131 71.591241 45.430657 7.474452 52.905109-108.029197s-33.40146-4.087591-69.372262-13.19708c-35.854015-9.343066-67.737226-21.956204-67.737227-21.956204z" fill="" ></path>' +
    '' +
    '<path d="M129.051095 700.613139l58.861314 5.956204s-26.627737 44.846715-51.854015 95.883212c-25.226277 51.153285-39.824818 89.693431-39.824817 89.69343L220.729927 837.021898 204.49635 900.437956s-13.547445 1.167883-73.109489 12.846716c-53.956204 10.510949-78.948905 19.270073-78.948905 19.270073l76.613139-231.941606z" fill="" ></path>' +
    '' +
    '<path d="M312.875912 651.678832l-70.540146 247.941606s13.781022-2.919708 42.744526-5.956204c22.890511-2.335766 35.153285-1.985401 35.153285-1.985402l6.773722-176.70073 40.291971 10.043796 15.649635 165.372263s9.226277-1.051095 31.883212-1.635037c22.656934-0.467153 32.934307 0.583942 32.934306 0.583942V829.19708L405.255474 848.116788l19.386862-178.569343s-22.072993-1.051095-56.642336-5.605839c-23.007299-2.919708-55.124088-12.262774-55.124088-12.262774z" fill="" ></path>' +
    '' +
    '<path d="M503.941606 667.912409s9.343066 0.233577 40.642336 0c19.737226-0.116788 46.248175-2.218978 46.248175-2.218978l-69.60584 227.153284s-4.087591-1.284672-17.284671-1.868613c-13.430657-0.583942-16.467153-0.467153-16.467153-0.467153l16.467153-222.59854z" fill="" ></path>' +
    '' +
    '<path d="M600.525547 763.211679l-14.481751 48.817518v96.467153s19.386861-1.635036 35.970803-1.751824c19.970803-0.116788 35.970803 1.40146 35.970802 1.401459l-57.459854-144.934306z" fill="" ></path>' +
    '' +
    '<path d="M684.729927 655.065693s29.89781-2.919708 57.576642-8.642335c33.518248-6.890511 63.883212-16.583942 63.883212-16.583942l-3.036496 28.379562L680.875912 730.277372l3.854015-75.211679z" fill="" ></path>' +
    '' +
    '<path d="M861.781022 620.846715s26.510949-3.737226 63.532847-13.080292c38.423358-9.693431 63.532847-17.518248 63.532846-17.518248s-2.919708 9.226277-2.919708 38.423358c0 23.941606 0.70073 37.021898 0.70073 37.021898l-63.532846-8.175183-65.751825-8.408759 4.437956-28.262774z" fill="" ></path>' +
    '' +
    '<path d="M806.306569 684.963504v40.9927L688.817518 858.043796l-7.941606-76.963504z" fill="" ></path>' +
    '' +
    '<path d="M857.226277 673.284672l135.357665 53.021897s-0.350365 19.854015 8.9927 64.934307 25.343066 89.810219 25.343066 89.810219L854.656934 712.759124l2.569343-39.474452z" fill="" ></path>' +
    '' +
    '<path d="M867.620438 780.145985l-59.79562 5.372263L725.255474 908.49635s70.423358 1.751825 119.0073 6.072993c48.467153 4.321168 130.452555 16 130.452554 16L867.620438 780.145985z m40.058394 106.861314s-27.328467-2.218978-57.693431-2.218978-54.189781 2.218978-54.189781 2.218978l43.562044-76.963503 68.321168 76.963503z" fill="" ></path>' +
    '' +
    '<path d="M831.182482 737.518248L810.510949 768.233577l45.89781-5.021898z" fill="" ></path>' +
    '' +
    '<path d="M784.467153 285.547445l-64.817518 49.051095L567.357664 91.562044 402.335766 281.343066l-68.087591-44.729927-268.49635 304.817518h908.846715L784.467153 285.547445zM267.678832 437.138686l35.386861-83.270073 31.182482-38.540146v-38.072993l46.715329 38.072993-113.284672 121.810219zM784.467153 315.328467l139.094891 187.678832-186.043796-145.751825 46.948905-41.927007zM636.846715 478.715328l-3.970803-96.583941-145.518248-104.875913 42.744526-35.153284 41.927007-83.153285L806.656934 519.708029l-169.810219-40.992701z" fill="" ></path>' +
    '' +
    '<path d="M442.043796 480.817518c0-0.70073 0.583942-1.284672 1.284671-1.284671 0.817518 0 1.40146 0.583942 1.40146 1.284671 0 1.751825 1.40146 3.270073 3.153285 3.270073 1.751825 0 3.153285-1.40146 3.153284-3.270073v-56.9927c0-0.70073 0.583942-1.284672 1.284672-1.284672 0.817518 0 1.284672 0.583942 1.284671 1.284672v56.9927c0 3.270073-2.569343 5.839416-5.722627 5.839416s-5.839416-2.569343-5.839416-5.839416z" fill="" ></path>' +
    '' +
    '<path d="M462.59854 485.372263V423.941606c0-0.70073 0.583942-1.284672 1.284672-1.284672 0.817518 0 1.40146 0.583942 1.40146 1.284672v61.430657c0 0.70073-0.583942 1.284672-1.40146 1.284671-0.70073 0-1.284672-0.70073-1.284672-1.284671z" fill="" ></path>' +
    '' +
    '<path d="M485.138686 428.262774v22.656934c0 2.218978-1.284672 4.321168-3.270073 5.255474-0.116788 0.116788-0.350365 0.116788-0.583941 0.116789l3.854014 28.846715c0.116788 0.70073-0.467153 1.40146-1.167883 1.40146h-0.116788c-0.70073 0-1.167883-0.467153-1.284672-1.051095l-3.854015-29.19708h-2.569343v29.080292c0 0.70073-0.467153 1.284672-1.284671 1.284671-0.70073 0-1.284672-0.583942-1.284672-1.284671v-56.992701c0-3.153285 2.569343-5.722628 5.839416-5.722628 3.153285-0.116788 5.722628 2.452555 5.722628 5.60584z m-2.569343 5.956204v-5.956204c0-1.751825-1.40146-3.153285-3.153285-3.153285-1.751825 0-3.270073 1.40146-3.270073 3.153285v25.459854h4.788322c1.051095-0.583942 1.635036-1.635036 1.635036-2.686132v-16.817518z" fill="" ></path>' +
    '' +
    '<path d="M496.233577 455.824818v24.875912c0 1.751825 1.40146 3.270073 3.153284 3.270073 1.751825 0 3.153285-1.40146 3.153285-3.270073 0-0.70073 0.583942-1.284672 1.40146-1.284672 0.70073 0 1.284672 0.583942 1.284671 1.284672 0 3.270073-2.569343 5.839416-5.839416 5.839416-3.153285 0-5.722628-2.569343-5.722627-5.839416v-52.554745c0-3.153285 2.569343-5.722628 5.722627-5.722627 3.270073 0 5.839416 2.569343 5.839416 5.722627 0 0.817518-0.583942 1.40146-1.284671 1.40146-0.817518 0-1.40146-0.583942-1.40146-1.40146 0-1.751825-1.40146-3.153285-3.153285-3.153284-1.751825 0-3.153285 1.40146-3.153284 3.153284V453.138686h7.708029c0.70073 0 1.284672 0.583942 1.284671 1.284672 0 0.70073-0.583942 1.284672-1.284671 1.284671h-7.708029z" fill="" ></path>' +
    '' +
    '<path d="M525.781022 423.941606v61.430657c0 0.817518-0.583942 1.284672-1.40146 1.284671-0.70073 0-1.284672-0.467153-1.284671-1.284671v-30.481752l-6.30657-21.839416v52.321168c0 0.817518-0.583942 1.284672-1.284671 1.284671-0.817518 0-1.40146-0.467153-1.40146-1.284671V423.941606c0-0.70073 0.467153-1.167883 1.167883-1.40146 0.70073-0.116788 1.284672 0.350365 1.40146 0.934307l6.423358 22.072992V423.941606c0-0.817518 0.583942-1.40146 1.284671-1.40146 0.817518 0 1.40146 0.583942 1.40146 1.40146z" fill="" ></path>' +
    '' +
    '<path d="M534.306569 480.817518v-52.554744c0-3.153285 2.686131-5.722628 5.839416-5.722628s5.722628 2.569343 5.722628 5.722628c0 0.817518-0.467153 1.40146-1.284671 1.40146-0.70073 0-1.284672-0.583942-1.284672-1.40146 0-1.751825-1.40146-3.153285-3.153285-3.153285-1.751825 0-3.153285 1.40146-3.153284 3.153285v52.554744c0 1.751825 1.40146 3.270073 3.153284 3.270073 1.751825 0 3.153285-1.40146 3.153285-3.270073v-16.583941h-3.153285c-0.70073 0-1.284672-0.583942-1.284671-1.284672 0-0.817518 0.583942-1.284672 1.284671-1.284671h4.437957c0.817518 0 1.284672 0.467153 1.284671 1.284671v17.868613c0 3.270073-2.569343 5.839416-5.722628 5.839416s-5.839416-2.569343-5.839416-5.839416z" fill="" ></path>' +
    '' +
    '<path d="M554.394161 480.817518v-56.9927c0-0.70073 0.583942-1.284672 1.284671-1.284672 0.817518 0 1.40146 0.583942 1.40146 1.284672v56.9927c0 1.751825 1.40146 3.270073 3.153285 3.270073 1.751825 0 3.153285-1.40146 3.153284-3.270073v-56.9927c0-0.70073 0.583942-1.284672 1.284672-1.284672 0.817518 0 1.284672 0.583942 1.284671 1.284672v56.9927c0 3.270073-2.569343 5.839416-5.722627 5.839416s-5.839416-2.569343-5.839416-5.839416z" fill="" ></path>' +
    '' +
    '<path d="M574.59854 485.372263v-4.437956c0-0.70073 0.583942-1.284672 1.284672-1.284672 0.817518 0 1.40146 0.583942 1.40146 1.284672v4.437956c0 0.70073-0.583942 1.284672-1.40146 1.284671-0.70073 0-1.284672-0.70073-1.284672-1.284671z" fill="" ></path>' +
    '' +
    '<path d="M586.160584 480.817518v-52.554744c0-3.153285 2.569343-5.722628 5.839416-5.722628 3.153285 0 5.722628 2.569343 5.722628 5.722628 0 0.817518-0.467153 1.40146-1.284672 1.40146-0.70073 0-1.284672-0.583942-1.284671-1.40146 0-1.751825-1.40146-3.153285-3.153285-3.153285-1.751825 0-3.153285 1.40146-3.153285 3.153285v52.554744c0 1.751825 1.40146 3.270073 3.153285 3.270073 1.751825 0 3.153285-1.40146 3.153285-3.270073 0-0.70073 0.583942-1.284672 1.284671-1.284671 0.817518 0 1.284672 0.583942 1.284672 1.284671 0 3.270073-2.569343 5.839416-5.722628 5.839416-3.270073 0-5.839416-2.569343-5.839416-5.839416z" fill="" ></path>' +
    '' +
    '<path d="M606.481752 480.934307v-52.554745c0-3.153285 2.686131-5.722628 5.839416-5.722628s5.839416 2.569343 5.839416 5.722628v52.554745c0 3.270073-2.686131 5.839416-5.839416 5.839416-3.153285-0.116788-5.839416-2.686131-5.839416-5.839416z m2.686131-52.554745v52.554745c0 1.751825 1.40146 3.270073 3.153285 3.270073 1.751825 0 3.153285-1.40146 3.153285-3.270073v-52.554745c0-1.751825-1.40146-3.153285-3.153285-3.153285-1.751825 0-3.153285 1.40146-3.153285 3.153285z" fill="" ></path>' +
    '' +
    '<path d="M647.357664 428.262774v56.9927c0 0.70073-0.583942 1.284672-1.284671 1.284672-0.70073 0-1.284672-0.583942-1.284672-1.284672v-56.29197-0.70073c0-1.751825-1.40146-3.153285-3.153285-3.153285-1.751825 0-3.270073 1.40146-3.270072 3.153285v56.9927c0 0.70073-0.467153 1.284672-1.284672 1.284672-0.70073 0-1.284672-0.583942-1.284672-1.284672v-56.9927c0-1.751825-1.40146-3.153285-3.153284-3.153285-1.751825 0-3.153285 1.40146-3.153285 3.153285v56.9927c0 0.70073-0.583942 1.284672-1.284671 1.284672-0.817518 0-1.40146-0.583942-1.40146-1.284672v-56.9927c0-3.153285 2.686131-5.722628 5.839416-5.722628 1.751825 0 3.386861 0.817518 4.437956 2.10219 1.051095-1.284672 2.686131-2.10219 4.554744-2.10219 3.153285 0 5.722628 2.569343 5.722628 5.722628z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)