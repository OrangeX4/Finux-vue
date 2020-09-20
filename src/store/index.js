import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    isExist: true,
    current: "/mnt/d/Project/Vue/finux",
    dirs: [{
      name: ".vscode",
      items: 1
    }, {
      name: "node_modules",
      items: 50
    }, {
      name: "public",
      items: 4
    }],
    files: [{
      name: "fs2json.js",
      size: 1274,
      showSize: "1 KiB",
      lastTime: "9/19/2020"
    }, {
      name: "index.js",
      size: 459,
      showSize: "459 Bytes",
      lastTime: "9/19/2020"
    }, {
      name: "package-lock.json",
      size: 14281,
      showSize: "13 KiB",
      lastTime: "9/17/2020"
    }, {
      name: "package.json",
      size: 303,
      showSize: "303 Bytes",
      lastTime: "9/19/2020"
    }]
  },
  mutations: {
    forward(state, dirname) {
      var url = 'http://127.0.0.1:1984/dir?dir=' + dirname

      var xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.send()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var res = xhr.responseText
          state = JSON.parse(res)
        }
      };
    }
  },
  actions: {},
  modules: {}
})