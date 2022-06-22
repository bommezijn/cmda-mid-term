import MyComponent from '../../../../slices/SummaryComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SummaryComponent'
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
      mock: {"variation":"default","name":"Default","slice_type":"summary_component","items":[{"number":"envisioneer holistic channels","summary":[{"type":"paragraph","text":"Consectetur irure sit nostrud. Nisi dolor qui duis non dolor. Culpa sunt esse ea aute.","spans":[]}]},{"number":"transform extensible eyeballs","summary":[{"type":"paragraph","text":"Ex occaecat dolor ipsum aliqua labore incididunt proident irure qui aliquip elit dolore enim ipsum. Enim consequat minim commodo qui elit non reprehenderit labore eu.","spans":[]}]},{"number":"innovate B2C web-readiness","summary":[{"type":"paragraph","text":"Qui ea occaecat esse aliqua nostrud ea commodo incididunt veniam laborum quis. Nulla cillum mollit excepteur eiusmod dolore adipisicing voluptate aliqua aute officia. Tempor nulla officia excepteur mollit esse cillum anim eu ullamco.","spans":[]}]},{"number":"seize 24/7 relationships","summary":[{"type":"paragraph","text":"Esse et culpa ex officia.","spans":[]}]},{"number":"transform world-class paradigms","summary":[{"type":"paragraph","text":"Consectetur irure aliqua culpa deserunt ea cupidatat commodo incididunt in.","spans":[]}]}],"primary":{"componentIndex":"leverage robust systems","title":[{"type":"heading1","text":"Productize real-time models","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
