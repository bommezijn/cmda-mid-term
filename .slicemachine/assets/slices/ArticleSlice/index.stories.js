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
      mock: {"variation":"default","name":"Default","slice_type":"article_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Strategize value-added architectures","spans":[]}],"description":[{"type":"paragraph","text":"Consectetur eiusmod adipisicing do dolor consequat aliquip ad.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
