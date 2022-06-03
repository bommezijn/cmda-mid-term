import MyComponent from '../../../../slices/TableSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TableSlice'
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
      mock: {"variation":"default","name":"Default","slice_type":"table_slice","items":[{"oldComps":[{"type":"paragraph","text":"Laboris commodo fugiat officia laboris veniam. Anim magna commodo ad nulla cillum consectetur mollit dolor occaecat incididunt.","spans":[]}],"newComps":[{"type":"paragraph","text":"Mollit consectetur officia veniam eiusmod aute dolor do eiusmod ad.","spans":[]}]},{"oldComps":[{"type":"paragraph","text":"Eiusmod sunt pariatur dolor elit pariatur officia. Magna incididunt ut laboris magna minim laborum nisi adipisicing labore.","spans":[]}],"newComps":[{"type":"paragraph","text":"Irure mollit est mollit elit voluptate consectetur pariatur. Voluptate excepteur est sunt exercitation.","spans":[]}]},{"oldComps":[{"type":"paragraph","text":"Amet do anim id nisi veniam cillum amet quis aute amet sit.","spans":[]}],"newComps":[{"type":"paragraph","text":"Esse est adipisicing eiusmod magna aliqua eiusmod Lorem. Tempor dolore Lorem anim.","spans":[]}]},{"oldComps":[{"type":"paragraph","text":"Tempor qui anim nulla aliqua in commodo sit incididunt qui dolore deserunt. Velit et ipsum duis.","spans":[]}],"newComps":[{"type":"paragraph","text":"Nulla eu nulla amet laborum do nulla sunt exercitation tempor aliqua occaecat in commodo officia nisi. Duis minim anim Lorem laborum.","spans":[]}]},{"oldComps":[{"type":"paragraph","text":"Elit non veniam anim commodo mollit qui sit aliquip amet velit aute ex ipsum irure. Aliquip elit est ullamco.","spans":[]}],"newComps":[{"type":"paragraph","text":"Quis enim mollit ex irure culpa reprehenderit deserunt do occaecat occaecat in incididunt cupidatat labore. Minim pariatur culpa eiusmod. In elit consectetur anim do consequat officia irure ea mollit.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Embrace viral partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Ea qui enim tempor eiusmod sit do eu pariatur. Irure qui do proident dolore eu ad quis ullamco amet eu voluptate cillum et.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
