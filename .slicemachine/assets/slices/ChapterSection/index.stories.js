import MyComponent from '../../../../slices/ChapterSection';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ChapterSection'
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
      mock: {"variation":"default","name":"Default","slice_type":"chapter_section","items":[],"primary":{"title":[{"type":"heading1","text":"Revolutionize rich content","spans":[]}],"description":[{"type":"paragraph","text":"Velit nisi ex est sunt aliqua adipisicing cillum ea adipisicing cupidatat cillum deserunt. Et anim ipsum occaecat in irure magna sint mollit mollit ea culpa.","spans":[]}],"chapterimage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
