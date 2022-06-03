import MyComponent from '../../../../slices/HeadingElement';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeadingElement'
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
      mock: {"variation":"default","name":"Default","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading1","text":"Embrace granular synergies","spans":[]}],"description":[{"type":"paragraph","text":"Culpa non laboris dolore ad nostrud mollit ad cillum commodo anim duis.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
