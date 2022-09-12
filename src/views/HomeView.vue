<script>
  export default {
    name: "large-modal",
    data() {
      return {
        showModal: false,
        title: "New Note",
        content: "",
      }
    },
    methods: {
      toggleModal: function(){
        this.showModal = !this.showModal;
      }
    }
  }
  </script>

<template>
  <main v-if="$store.state.user">
    <nav class=" bg-white w-full flex justify-between items-center mx-auto px-8 h-20 fixed top-0 left-0 right-0 shadow-md">
      <!-- logo -->
      <div class="inline-flex">
          <a class="_o6689fn" href="/">
            <h1 class="text-4xl">Note</h1>
          </a>
      </div>

      <!-- end logo -->

      <!-- login -->
      <div class="flex-initial">
        <div class="flex justify-end items-center relative">
          <div class="block">
              <div class="inline relative">
                  <button type="button" @click="$store.dispatch('logout')" class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">      
                    Logout
                      <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                          <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                          >
                              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                          </svg>
                      </div>
                  </button>
              </div>
          </div>
        </div>
      </div>
      <!-- end login -->
    </nav>
    <div class="flex min-h-screen items-center justify-center p-10 bg-white">
      <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-3 lg:grid-rows-2">
        <button type="button" v-on:click="toggleModal()" class="flex rounded-md border border-slate-200 shadow-md">
          <div class="flex-1 p-10">
            <h3 class="text-xl font-medium text-gray-700 text-left">A live-chat that fits your brand</h3>
            <p class="mt-2 text-slate-500 text-justify">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
          </div>
        </button>
      </div>
    </div>
    <div>
    
    <!-- Modal -->
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              {{ title}}
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="flex items-center justify-start bg-white m-10">
            <div class="mx-auto w-screen">

              <form action="https://api.web3forms.com/submit" class="">
              
                <!-- <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />  -->
                <div class="">
                  <div class="relative z-0 mb-10">
                    <input type="text" v-model="title" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Title</label>
                  </div>
                  <div class="relative z-0">
                    <textarea name="message" rows="10" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Note</label>
                  </div>
                </div>
                <!-- <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">Send Message</button> -->
              </form>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
  </main>
</template>
