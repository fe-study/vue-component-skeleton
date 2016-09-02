import Vue from 'vue'
import vHello from '../dist/build.js'

Vue.config.devtools = true

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            }
		}
	},
	components: {
		vHello
	}
})
