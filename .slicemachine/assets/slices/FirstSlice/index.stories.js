import MyComponent from '../../../../slices/FirstSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FirstSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"first_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Brand end-to-end synergies","spans":[]}],"description":[{"type":"paragraph","text":"Lorem adipisicing fugiat adipisicing cupidatat aliquip. Sit cillum non velit tempor enim ut minim culpa consectetur. Eu id sint enim.","spans":[]}],"rounded":true},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
