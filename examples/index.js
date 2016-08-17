import Vue from 'vue'
import vHello from '../dist/build.js'

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
