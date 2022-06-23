import MyComponent from '../../../../slices/QuoteComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/QuoteComponent'
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
      mock: {"variation":"default","name":"Default","slice_type":"quote_component","items":[],"primary":{"componentIndex":"brand killer deliverables","title":[{"type":"heading1","text":"Revolutionize wireless infrastructures","spans":[]}],"quote":[{"type":"paragraph","text":"Duis sunt occaecat voluptate enim exercitation ipsum adipisicing et voluptate ad in irure dolore.","spans":[]}],"quoteName":"generate vertical paradigms"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
