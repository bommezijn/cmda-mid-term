import MyComponent from '../../../../slices/ArticleSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ArticleSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"article_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Facilitate holistic relationships","spans":[]}],"description":[{"type":"paragraph","text":"Sunt Lorem consectetur officia ut amet ut esse et occaecat voluptate Lorem enim nisi pariatur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
