import MyComponent from '../../../../slices/TimelineComponent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TimelineComponent'
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
      mock: {"variation":"default","name":"Default","slice_type":"timeline_component","items":[{"weekTitle":"aggregate mission-critical schemas","weekContent":[{"type":"paragraph","text":"Labore do et dolor in occaecat mollit ad enim officia elit labore in fugiat. Veniam proident nostrud sit id est sint sint.","spans":[]}]},{"weekTitle":"grow granular systems","weekContent":[{"type":"paragraph","text":"Lorem fugiat non occaecat veniam sint ad voluptate proident velit esse amet pariatur nostrud. Sit cillum qui quis mollit laboris nostrud adipisicing. Tempor culpa ex elit in tempor eu velit ex labore.","spans":[]}]},{"weekTitle":"empower ubiquitous models","weekContent":[{"type":"paragraph","text":"Aute velit consectetur deserunt in cillum nulla occaecat cupidatat ipsum in. Est quis quis ea do reprehenderit do eu non do ut.","spans":[]}]},{"weekTitle":"maximize frictionless supply-chains","weekContent":[{"type":"paragraph","text":"Proident deserunt cillum eu velit et pariatur aliquip amet. Consequat laboris cupidatat adipisicing in eiusmod dolore laboris id ex esse do laboris eu non. Magna ullamco elit nisi consequat reprehenderit commodo nisi adipisicing consequat proident minim exercitation.","spans":[]}]},{"weekTitle":"facilitate turn-key schemas","weekContent":[{"type":"paragraph","text":"Laborum deserunt nostrud duis eu culpa qui laborum commodo in. Sint ullamco sunt qui cupidatat incididunt adipisicing commodo nulla nostrud excepteur consequat. Consectetur exercitation dolore cillum ullamco occaecat ex incididunt adipisicing ex et mollit consectetur reprehenderit.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Morph sexy e-business","spans":[]}],"description":[{"type":"paragraph","text":"Ut aute aliquip nostrud sint non magna fugiat esse ut.","spans":[]}],"weekAmount":9692},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
