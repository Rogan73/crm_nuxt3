<script setup>
import { useConfirmStore } from '@/stores/storeConfirm'
import { storeToRefs } from 'pinia'
import iDelBig from '@/components/icons/iDelBig.vue'
import iInfoBig from '@/components/icons/iInfoBig.vue'
import iConfirmBig from '@/components/icons/iConfirmBig.vue'
import iErrorBig from '@/components/icons/iErrorBig.vue'
import iSuccessBig from '@/components/icons/iSuccessBig.vue'
import iWarningBig from '@/components/icons/iWarningBig.vue'
import iExclamationBig from '@/components/icons/iExclamationBig.vue'



const store = useConfirmStore()
const { dialog } = storeToRefs(store)
const { handleConfirm } = store


// dialog.type = info, delete, confirm, error, success, warning, alert
</script>

<template>

<div v-if="dialog.open" class="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center bg-gray-700 bg-opacity-75 backdrop-blur-sm ">
    <div class="relative w-full max-w-md p-4">
      <!-- Modal content -->
      <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        
        <button type="button" @click="handleConfirm(false)" class="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>

        <iDelBig v-if="dialog.type=='delete' " />
        <iInfoBig v-if="dialog.type=='info'" />
        <iConfirmBig v-if="dialog.type=='confirm'" />
        <iErrorBig v-if="dialog.type=='error' "  />
        <iSuccessBig v-if="dialog.type=='success'" />
        <iExclamationBig v-if="dialog.type=='alert'" />
        <iWarningBig v-if=" dialog.type=='warning' " />
        


        <p class="mb-4 text-gray-500 dark:text-gray-300" v-html="dialog.message"></p>
        
        <div  v-if="dialog.type=='delete'"  class="flex justify-center items-center space-x-4">
          <button @click="handleConfirm(false)" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button @click="handleConfirm(true)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            Yes
          </button>
        </div>

        <div  v-if="dialog.type=='error'"  class="flex justify-center items-center space-x-4">
          <button @click="handleConfirm(false)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            OK
          </button>
        </div>        

        <div  v-if="dialog.type=='warning'"  class="flex justify-center items-center space-x-4">
          <button @click="handleConfirm(false)" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button @click="handleConfirm(true)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-900">
            Yes
          </button>
        </div>

        <div  v-if="dialog.type=='alert'"  class="flex justify-center items-center space-x-4">
          <button @click="handleConfirm(false)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-900">
            OK
          </button>
        </div>

        <div  v-if="dialog.type=='confirm'"  class="flex justify-center items-center space-x-4">
          <button @click="handleConfirm(false)" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Cancel
          </button>
          <button @click="handleConfirm(true)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-900">
            Yes
          </button>
        </div>        


        <div  v-if="dialog.type=='info'"  class="flex justify-center items-center space-x-4">
           <button @click="handleConfirm(false)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-900">
            OK
           </button>
        </div>

        <div  v-if="dialog.type=='success'"  class="flex justify-center items-center space-x-4">
           <button @click="handleConfirm(false)" class="py-2 px-3 text-sm min-w-20 font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900">
            OK
           </button>
        </div>

      </div>
    </div>
  </div>


</template>