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
      mock: {"variation":"default","name":"Default","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading1","text":"Optimize efficient users","spans":[]}],"description":[{"type":"paragraph","text":"Eu laboris consectetur amet do tempor id dolore eiusmod irure proident qui elit amet. Esse labore dolore in Lorem aliquip excepteur consequat tempor do sint aliquip et quis. Proident reprehenderit non tempor voluptate.","spans":[]}]},"id":"_Default"}
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
      mock: {"variation":"subheading","name":"subheading","slice_type":"heading_element","items":[],"primary":{"title":[{"type":"heading2","text":"Integrate impactful functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Irure laborum fugiat sunt exercitation pariatur. Elit anim reprehenderit enim esse fugiat adipisicing.","spans":[]}]},"id":"_Subheading"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Subheading.storyName = 'subheading'
