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
      mock: {"variation":"default","name":"Default","slice_type":"title_element","items":[],"primary":{"title":[{"type":"heading1","text":"Envisioneer synergistic e-markets","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit exercitation ullamco magna laborum est do ut sit nulla occaecat. Proident nostrud ut cupidatat eu aliquip excepteur exercitation ullamco tempor id tempor voluptate.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
