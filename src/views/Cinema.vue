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

        <div v-for="message in messages" :key="message.id">
          <span class="userMessage" v-text="message.user"/>: {{message.message}}
        </div>

      </div>
      <div class="control">
        <input v-on:keyup.enter="sendMessage" class="input" v-model="message" type="text" placeholder="Chat"
               required>
      </div>
    </div>
  </div>
</template>

<script>

import * as firebase from 'firebase'

firebase.initializeApp(
  {
    apiKey: 'AIzaSyAOyMC0kRsSoOVaanutWSFKP9v6fIPinRM',
    authDomain: 'sharefilm-11ee2.firebaseapp.com',
    databaseURL: 'https://sharefilm-11ee2.firebaseio.com',
    projectId: 'sharefilm-11ee2',
    storageBucket: 'sharefilm-11ee2.appspot.com',
    messagingSenderId: '646419744006',
    appId: '1:646419744006:web:ba18bf7942b0083d'
  }
)

let database = firebase.database()

export default {
  name: 'Cinema',
  data () {
    return {
      messages: [],
      message: '',
      user: null
    }
  },
  methods: {
    sendMessage () {
      database.ref('chats/' + this.$route.params.user).push({ message: this.message, user: this.user })
      this.message = ''
    }
  },
  computed: {
    streamSrc () {
      return 'http://sharefilm.ibon.dev:' + this.$route.params.port
    }
  },
  mounted () {
    while (this.user === null) {
      this.user = prompt('Dime tu nombre')
    }

    database.ref('chats/' + this.$route.params.user).on('child_added', snapshot => {
      this.messages.push(Object.assign(snapshot.val(), { id: snapshot.key }))
    })
  }

}
</script>

<style scoped>
  .userMessage {
    font-weight: bold;
  }

  #chat {
    position: absolute;
    right: 0;
    background: #1c212e;
    height: 101%;
  }

  .chat {
    height: 94%;
    color: #949cb0;
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
