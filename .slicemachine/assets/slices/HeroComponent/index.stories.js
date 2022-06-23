import MyComponent from '../../../../slices/HeroComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeroComponent'
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
      mock: {"variation":"default","name":"Default","slice_type":"hero_component","items":[],"primary":{"title":[{"type":"heading1","text":"Architect plug-and-play niches","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit culpa velit enim mollit nostrud pariatur incididunt sunt enim eu duis non eiusmod labore occaecat. Anim excepteur tempor quis velit qui eiusmod.","spans":[]}],"backgroundImage":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
