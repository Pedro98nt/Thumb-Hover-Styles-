new Vue({
    el: "#app",
    data: {
      images: ["fkS-me35j7I", "HYBOqyse6EU", "68C1VrUX7aU", "-V9ivM5Xd_k", "3XN-BNRDUyY", "qLBOF5GdbNE", "P-2CxtQvUQY", "MV7sfxz8Jcs"],
      style: "style1"
    },
    methods: {
      changeStyle: function(s) {
        this.style = "style" + s;
      }
    }
  });