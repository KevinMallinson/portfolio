import Vue from 'vue';

export default Vue.directive('first-element', {
	inserted: function (el, binding, vnode) {
		const navbar = document.getElementsByClassName('navbar')[0];
		const height = navbar.offsetHeight;
		el.style.marginTop = `-${height}px`;

		const firstChild = el.firstChild;
		firstChild.style.paddingTop = `${height}px`;
	}
});