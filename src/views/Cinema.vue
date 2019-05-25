<template>
  <div class="columns">
    <div id="video" class="column">
      <video class="stream" style="width: 100%" controls
      >
        <source :src="streamSrc">
      </video>
    </div>
    <div id="chat" class="column is-one-fifth">
        <div class="chat">

        </div>
        <div class="control">
          <input class="input" type="text" placeholder="Chat" required>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cinema',
  computed: {
    streamSrc () {
      return 'http://sharefilm.ibon.dev:' + this.$route.params.port
    }
  }
}
</script>

<style scoped>
#chat {
  position: absolute;
  right: 0;
  background: #1c212e;
  height: 101%;
}

.chat {
  height: 94%;
}

#video {
  position: absolute;
  left: 0;
  width: 80%;
  padding: 0;
}

.stream {
  margin-top: 8%;
}

.control {
  position: fixed;
  bottom: 0;
  background: linear-gradient(135deg, #8ebcee, #388fff);
  padding: 3px;
  width: 18%;
  margin-bottom: 10px;
}

.input {
  border-radius: 0px;
  background: #1c212e;
  border: 1px solid transparent;
  color: #949cb0;
}

.input::placeholder {
  color: #949cb0;
}
</style>
