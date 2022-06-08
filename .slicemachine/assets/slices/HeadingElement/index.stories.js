import MyComponent from '../../../../slices/HeadingElement';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HeadingElement'
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
      mock: {"variation":"default","name":"Default","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading1","text":"Revolutionize innovative applications","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit adipisicing cillum dolore. Excepteur irure tempor cupidatat esse est aliquip adipisicing ullamco cupidatat ullamco ullamco ex. Deserunt reprehenderit officia officia commodo esse pariatur cupidatat tempor aliquip laboris dolore pariatur eu ea.","spans":[]}],"background":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _Subheading = () => ({
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
      mock: {"variation":"subheading","name":"subheading","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading2","text":"Iterate value-added initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Cillum laboris anim enim dolor incididunt Lorem non velit commodo quis culpa exercitation. Enim in excepteur in dolore eiusmod sunt ad enim reprehenderit ipsum incididunt nisi eiusmod.","spans":[]}]},"id":"_Subheading"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Subheading.storyName = 'subheading'
