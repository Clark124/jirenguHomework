;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-email" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M876.032 819.968 148.032 819.968C101.632 819.968 64 782.4 64 736l0-448c0-46.4 37.632-83.968 84.032-83.968l728 0C922.368 204.032 960 241.6 960 288l0 448C960 782.4 922.368 819.968 876.032 819.968zM902.272 734.528 902.272 289.472 642.624 512 902.272 734.528zM512 568l359.296-307.968L152.64 260.032 512 568zM871.296 764.032l-261.312-224L512 624 414.016 540.032l-261.312 224L871.296 764.032zM381.312 512 121.728 289.472l0 444.992L381.312 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.196995 102.677521l-358.171845 0c-42.21311 0-76.75111 34.536584-76.75111 76.747965l0 665.149029c0 42.211381 34.537999 76.747965 76.75111 76.747965l358.171845 0c42.21311 0 76.75111-34.536584 76.75111-76.747965l0-665.149029C588.948104 137.214105 554.410105 102.677521 512.196995 102.677521L512.196995 102.677521zM230.77626 141.051503l204.669625 0 0 25.582655-204.669625 0L230.77626 141.051503 230.77626 141.051503zM333.111072 870.157169c-28.256688 0-51.167406-22.908756-51.167406-51.16531 0-28.255531 22.910718-51.16531 51.167406-51.16531 28.257712 0 51.167406 22.909779 51.167406 51.16531C384.278479 847.248414 361.369807 870.157169 333.111072 870.157169L333.111072 870.157169zM537.780698 716.66124l-409.339251 0 0-511.653099 409.339251 0L537.780698 716.66124 537.780698 716.66124zM537.780698 716.66124"  ></path>' +
    '' +
    '<path d="M795.245876 227.472781c68.205129 59.58712 107.319541 146.651035 107.319541 238.862179 0 92.229564-39.129762 179.294502-107.338985 238.865249-3.805832 3.303232-5.748146 7.963369-5.748146 12.623505 0 3.90596 1.359006 7.846712 4.140467 11.017938 6.084828 6.970762 16.666248 7.695263 23.642412 1.605567 75.532302-65.938782 118.840395-162.189939 118.840395-264.11226 0-101.902878-43.293766-198.155059-118.792297-264.114307-6.972071-6.083555-17.568841-5.380544-23.656739 1.595334C787.548252 210.790844 788.271759 221.387179 795.245876 227.472781L795.245876 227.472781zM728.765089 635.740232c-4.072926 3.301186-6.184093 8.130168-6.184093 13.006222 0 3.725858 1.222901 7.447623 3.770015 10.565636 5.852528 7.190773 16.413481 8.266267 23.572824 2.430352 58.533466-47.616484 92.100308-118.852922 92.100308-195.407482 0-76.53614-33.566842-147.757229-92.064491-195.403389-7.195161-5.853311-17.757137-4.761444-23.593291 2.412956-5.884252 7.207146-4.745265 17.789155 2.414078 23.589254 50.650616 41.24231 79.723936 103.010095 79.723936 169.401178C808.490048 532.761859 779.432078 594.511225 728.765089 635.740232L728.765089 635.740232zM663.814206 564.599985c-7.599383 5.300726-9.442433 15.777335-4.160933 23.354917 5.300943 7.594979 15.746258 9.438976 23.356898 4.157693 40.673995-28.385491 64.954976-75.398224 64.954976-125.778658 0-51.134611-24.847916-98.533131-66.465438-126.815267-7.658737-5.216815-18.088701-3.201925-23.304707 4.442172-1.958688 2.902096-2.898122 6.170536-2.898122 9.42158 0 5.367241 2.566557 10.647501 7.343546 13.881149 32.443206 22.031782 51.790625 59.068304 51.790625 99.088786C714.430028 505.751692 695.502181 542.502711 663.814206 564.599985L663.814206 564.599985zM600.250984 432.80531M600.250984 432.80531"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-address" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M620.709611 858.15833"  ></path>' +
    '' +
    '<path d="M525.924659 1024c-8.216573 0-16.305162-3.941907-21.270941-11.262592L197.415323 559.366879c-36.680215-58.00235-55.826622-123.862917-55.826622-191.182502 0-203.008224 172.266467-368.184377 384.0032-368.184377s384.0032 165.176153 384.0032 368.184377c0 67.191601-19.095213 132.975378-55.186702 190.209824l-212.453443 314.123935c-7.935008 11.723335-23.933008 14.794951-35.630746 6.885539-11.723335-7.935008-14.820547-23.881815-6.885539-35.630746L811.482565 530.314511c30.460192-48.352356 46.816548-104.665317 46.816548-162.130134C858.299113 193.460617 709.069766 51.321585 525.617498 51.321585S192.910286 193.460617 192.910286 368.15878c0 57.592801 16.407549 114.008149 47.430871 163.102812l306.80325 452.679415c7.960605 11.723335 4.888989 27.695738-6.834346 35.656343C535.907412 1022.540982 530.890439 1024 525.924659 1024z"  ></path>' +
    '' +
    '<path d="M525.617498 546.747657c-99.238795 0-179.9967-80.732308-179.9967-179.971104 0-99.238795 80.732308-179.9967 179.9967-179.9967s179.9967 80.732308 179.9967 179.9967C705.588601 466.015348 624.856293 546.747657 525.617498 546.747657zM525.617498 239.611649c-70.135233 0-127.164904 57.055268-127.164904 127.164904 0 70.109636 57.055268 127.190501 127.164904 127.190501s127.164904-57.055268 127.164904-127.190501C652.782402 296.64132 595.727134 239.611649 525.617498 239.611649z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-blog" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M32 96l960 0 0 64-960 0 0-64z"  ></path>' +
    '' +
    '<path d="M32 864l960 0 0 64-960 0 0-64z"  ></path>' +
    '' +
    '<path d="M128 192l64 0 0 64-64 0 0-64z"  ></path>' +
    '' +
    '<path d="M224 192l64 0 0 64-64 0 0-64z"  ></path>' +
    '' +
    '<path d="M320 192l64 0 0 64-64 0 0-64z"  ></path>' +
    '' +
    '<path d="M384 768l-256 0 0-320 256 0 0 320zM192 704l128 0 0-192-128 0 0 192z"  ></path>' +
    '' +
    '<path d="M448 448l224 0 0 64-224 0 0-64z"  ></path>' +
    '' +
    '<path d="M1024 352l-1024 0 0-256 1024 0 0 256zM64 288l896 0 0-128-896 0 0 128z"  ></path>' +
    '' +
    '<path d="M1024 928l-1024 0 0-479.84 64 0 0 415.84 896 0 0-447.264 64 0z"  ></path>' +
    '' +
    '<path d="M448 576l448 0 0 64-448 0 0-64z"  ></path>' +
    '' +
    '<path d="M448 704l448 0 0 64-448 0 0-64z"  ></path>' +
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