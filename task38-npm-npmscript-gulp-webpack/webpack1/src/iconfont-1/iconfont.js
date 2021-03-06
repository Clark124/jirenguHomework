;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon6" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.003122 26.275433c-268.223904 0-485.661122 217.437218-485.661122 485.661122 0 268.222881 217.437218 485.661122 485.661122 485.661122 268.222881 0 485.661122-217.438241 485.661122-485.661122C999.66322 243.711628 782.226003 26.275433 514.003122 26.275433zM514.003122 943.631578c-238.423181 0-431.701163-193.276958-431.701163-431.698093S275.579941 80.234369 514.003122 80.234369c238.419088 0 431.697069 193.277982 431.697069 431.699116S752.42221 943.631578 514.003122 943.631578z"  ></path>' +
    '' +
    '<path d="M211.571115 640.434138 243.992525 640.434138 243.992525 528.146749 334.715783 528.146749 334.715783 495.724315 243.992525 495.724315 243.992525 415.859359 334.715783 415.859359 334.715783 383.437949 211.571115 383.437949Z"  ></path>' +
    '' +
    '<path d="M481.543849 532.346397c16.949021-16.946974 25.542746-37.72623 25.542746-61.756529 0-23.932062-8.592702-44.660152-25.542746-61.61122-14.137998-14.133905-31.532157-22.696931-51.696406-25.453718l-73.27077-0.086981 0 256.996189 32.422434 0 0-82.541925 29.845749 0 52.999075 82.541925 39.226397 0L453.379393 551.47506C463.684086 547.176151 473.119993 540.7723 481.543849 532.346397zM389.00013 416.007739l30.934546 0c15.165398 0 27.78174 5.222955 38.570457 15.9646 10.774391 10.734482 16.010649 23.366174 16.010649 38.618553 0 15.260565-5.242398 27.92091-16.023952 38.703487-10.786671 10.784624-23.39892 16.027022-38.557154 16.027022l-30.934546 0L389.00013 416.007739z"  ></path>' +
    '' +
    '<path d="M518.538415 640.434138 656.555815 640.434138 656.555815 608.011704 550.960849 608.011704 550.960849 528.146749 656.555815 528.146749 656.555815 495.724315 550.960849 495.724315 550.960849 415.859359 656.555815 415.859359 656.555815 383.437949 518.538415 383.437949Z"  ></path>' +
    '' +
    '<path d="M816.435129 415.859359 816.435129 383.437949 678.418752 383.437949 678.418752 640.434138 816.435129 640.434138 816.435129 608.011704 710.841186 608.011704 710.841186 528.146749 816.435129 528.146749 816.435129 495.724315 710.841186 495.724315 710.841186 415.859359Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shandian" viewBox="0 0 1054 1024">' +
    '' +
    '<path d="M526.530263 0 104.761942 133.988815l2.137667 521.695808 0.470312 5.647493c0.764257 3.431024 17.001269 86.319717 98.143805 166.166394 62.395109 61.533288 215.421543 141.929078 280.719826 176.245575 10.25805 5.412338 17.92313 9.391225 22.296029 11.844101l15.50903 8.411826 19.042622-9.667658c38.159044-18.726163 232.286472-115.691687 304.409279-186.733777 81.2401-79.907967 97.474611-162.775396 98.162567-166.226434l2.645504-527.343302L526.530263 0 526.530263 0 526.530263 0zM881.312932 652.095994c-3.057026 12.176821-20.529858 72.219121-79.709085 130.495249-60.141115 59.299307-228.581516 145.460169-276.444492 169.346002-2.530427-1.295859-5.277248-2.688032-8.159158-4.23906-57.413056-30.15749-209.83534-110.219309-265.464714-165.106942-59.336832-58.354931-76.690835-118.318428-79.750363-130.495249l-1.940036-471.850268 356.68518-113.338877 356.686431 113.338877L881.312932 652.095994 881.312932 652.095994 881.312932 652.095994zM710.658563 470.772053 576.473368 470.772053l32.57159-259.15178L344.834825 550.501152l134.183944 0-32.570339 259.131767L710.658563 470.772053 710.658563 470.772053zM710.658563 470.772053"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuefeilv" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M192.186114 673.197332c4.687766 0 9.372461-1.797949 12.950963-5.3918l149.471266-150.192697 117.29238 117.852128 254.957763-256.171404 68.575842 68.911486 92.976578-93.409436c7.15598-7.186679 7.15598-18.84009 0-26.02984-7.15598-7.186679-18.750039-7.186679-25.901926 0l-67.074651 67.390853-68.575842-68.911486L471.901747 583.412446 354.608344 465.562365l-175.374216 176.216397c-7.15598 7.189749-7.15598 18.837021 0 26.02677C182.810582 671.399383 187.498348 673.197332 192.186114 673.197332zM919.765007 847.90333c0 10.163477-8.201799 18.407232-18.317181 18.407232L71.619154 866.310561 71.619154 177.925319c0-10.163477 8.198729-18.405185 18.317181-18.405185 10.115382 0 18.317181 8.240685 18.317181 18.405185l0 651.570779 793.19431 0C911.563208 829.496098 919.765007 837.734736 919.765007 847.90333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-edu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1.024A508.8256 508.8256 0 0 0 19.182933 378.5728l115.2 89.6C153.6 276.206933 313.617067 128.989867 512 128.989867c153.6 0 281.6 89.6 345.6 217.6l-121.617067 32.017066L1024 506.606933C1017.582933 231.389867 793.6 0.989867 512 0.989867z m0 889.582933c-153.6 0-281.6-89.6-345.6-217.6h121.617067L0 481.006933v31.982934c6.417067 275.217067 230.4 505.617067 512 505.617066 243.2 0 448-172.817067 499.2-403.217066l-121.617067-64c-19.182933 185.617067-179.2 339.217067-377.582933 339.217066z m83.217067-595.217066l-32.017067 70.417066c-25.6 51.2-38.4 76.8-38.4 89.6 0 6.382933-6.417067 12.8-6.417067 12.8-12.765867-25.6-38.365867-83.217067-83.182933-172.817066H339.182933l108.817067 192h-76.8v57.617066h102.4v44.782934h-108.817067v57.617066h102.4v76.8h89.634134v-76.8h95.982933v-64h-96.017067v-38.4h96.017067v-57.617066h-76.8l108.817067-192h-89.6z"  ></path>' +
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