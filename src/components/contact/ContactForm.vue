<template>
  <div>
    <h1 class="mt-4 mb-4"><span id="guillemet">»</span> Kontaktieren Sie uns</h1>
    <form v-if="!emailSent && !error" class="form-group border rounded p-4 mt-4 w-50 mx-auto" ref="form" @submit.prevent="sendEmail">
        <label class="pt-2">Name</label>
        <input v-model="name" class="form-control" type="text" name="user_name" placeholder="Vorname Nachname" required>
        <label class="pt-2">E-Mail</label>
        <input v-model="email" class="form-control" type="email" name="user_email" placeholder="vorname.nachname@gmail.com" required>
        <label class="pt-2">Nachricht</label>
        <textarea v-model="msg" class="form-control" name="message" placeholder="Ihre Nachricht an uns" required></textarea>
        <br>
        <input v-if="!emailSubmitted" class="btn btn-primary btn-cl" type="submit" value="Send">
        <div v-if="emailSubmitted" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </form>
    <div v-if="emailSent" class="alert alert-success mt-5" role="alert">
    Ihre Anfrage wurde erfolgreich versandt. Wir melden uns so bald wie möglich!
    </div>
    <div v-if="error" class="alert alert-danger mt-5" role="alert">
    Ups, etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut!
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
        name: '',
        email: '',
        msg: '',
        emailSubmitted: false,
        emailSent: false,
        error: false
    }
  },
  methods: {
    clearForm() {
      this.name = '',
      this.email = '',
      this.msg = ''
    },
    sendEmail() {
      this.emailSubmitted = true;
      emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE, process.env.VUE_APP_EMAILJS_TEMPLATE, this.$refs.form, process.env.VUE_APP_EMAILJS_KEY)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.emailSent = true;
            this.clearForm();
        }, (error) => {
            console.log('FAILED...', error.text);
            this.error = true;
            this.clearForm();
        });
    }
  }
}
</script>

<style scoped>

  .btn-cl {
      background-color: #990000;
      border-color: white;
  }

  .btn-cl:hover {
      background-color: grey;
      border-color: white;
  }

  @media screen and (max-width: 768px) {
    form { 
      width: 90% !important;
    }
  }

</style>