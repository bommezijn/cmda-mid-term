import MyComponent from '../../../../slices/PopupComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/PopupComponent'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"popup_component","items":[{"popupTitle":[{"type":"paragraph","text":"Tempor sint in pariatur et nulla ea. Ullamco quis excepteur do ipsum veniam nostrud enim cupidatat eiusmod fugiat ipsum sunt pariatur eu.","spans":[]}],"popupContent":[{"type":"paragraph","text":"Eiusmod aliqua est laboris cupidatat quis ad nostrud officia sunt velit velit exercitation duis.","spans":[]}]},{"popupTitle":[{"type":"paragraph","text":"Laboris nulla cupidatat eiusmod amet cupidatat cillum enim.","spans":[]}],"popupContent":[{"type":"paragraph","text":"Esse eiusmod minim sit Lorem aute reprehenderit mollit mollit. Proident magna eu Lorem labore mollit.","spans":[]}]},{"popupTitle":[{"type":"paragraph","text":"Id deserunt labore sunt sint.","spans":[]}],"popupContent":[{"type":"paragraph","text":"Do ut labore duis eiusmod. Tempor cupidatat ea eiusmod anim commodo cillum eu cupidatat officia pariatur nostrud pariatur. Incididunt ad aute sint cillum aute tempor esse quis voluptate laborum.","spans":[]}]}],"primary":{"componentIndex":"optimize impactful e-business","title":[{"type":"heading1","text":"Synergize clicks-and-mortar networks","spans":[]}],"description":[{"type":"paragraph","text":"Et id officia in dolor.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
