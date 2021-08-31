import { DirectiveBinding } from 'vue'

export default {
  color: {
    created(el: HTMLElement, binding: DirectiveBinding): void {
      if (binding.value && typeof binding.value === 'string') {
        el.style.color = binding.value
      } else {
        el.style.color = 'black'
      }
    },
  },
}
