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
      mock: {"variation":"default","name":"Default","slice_type":"quote_component","items":[],"primary":{"componentIndex":"evolve clicks-and-mortar content","title":[{"type":"heading1","text":"Visualize virtual web services","spans":[]}],"description":[{"type":"paragraph","text":"Magna enim velit id aute irure consectetur ipsum cupidatat proident magna. Dolore ad ullamco ex deserunt nulla reprehenderit aliqua aliqua nisi esse in. Ad amet elit pariatur velit amet magna ad occaecat aliquip proident et velit veniam.","spans":[]}],"media":{"link_type":"media","url":"https://source.unsplash.com/daily"},"quoteName":"morph cross-media applications"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
