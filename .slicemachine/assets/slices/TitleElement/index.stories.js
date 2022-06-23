import MyComponent from '../../../../slices/TitleElement';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TitleElement'
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
      mock: {"variation":"default","name":"Default","slice_type":"title_element","items":[],"primary":{"componentIndex":"1.2","title":[{"type":"heading1","text":"Generate strategic ROI","spans":[]}],"description":[{"type":"paragraph","text":"Laboris aliqua eu laboris. Nisi reprehenderit deserunt amet excepteur ad in nisi.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
