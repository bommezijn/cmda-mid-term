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
      mock: {"variation":"default","name":"Default","slice_type":"article_slice","items":[{"content":[{"type":"paragraph","text":"Cupidatat eu culpa nulla ut aliquip non dolor sunt enim.","spans":[]}]},{"content":[{"type":"paragraph","text":"Nisi cillum aute est mollit dolor excepteur est. Non incididunt sunt Lorem mollit pariatur pariatur veniam eu aute laboris. Duis nisi laboris eiusmod ipsum id incididunt consectetur ullamco.","spans":[]}]},{"content":[{"type":"paragraph","text":"Elit minim aute sunt fugiat nisi et cillum incididunt ullamco ad nisi proident in qui. Deserunt minim consequat eu reprehenderit esse tempor. Proident dolore commodo veniam ullamco voluptate ea dolor nostrud.","spans":[]}]}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'

export const _Single = () => ({
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
      mock: {"variation":"single","name":"single","slice_type":"article_slice","items":[],"primary":{"content":[{"type":"paragraph","text":"Sunt exercitation anim tempor aliquip amet occaecat id aliquip duis nostrud sit nisi est. Sunt veniam aliquip quis ullamco magna. Eu deserunt irure irure.","spans":[]}]},"id":"_Single"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Single.storyName = 'single'

export const _ImgLeft = () => ({
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
      mock: {"variation":"imgLeft","name":"imgLeft","slice_type":"article_slice","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"content":[{"type":"paragraph","text":"Officia ullamco adipisicing qui laborum.","spans":[]}]},"id":"_ImgLeft"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImgLeft.storyName = 'imgLeft'

export const _ImgRight = () => ({
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
      mock: {"variation":"imgRight","name":"imgRight","slice_type":"article_slice","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"content":[{"type":"paragraph","text":"Et aute veniam deserunt aute. Ex culpa enim cillum tempor dolore cillum ex in eiusmod labore consequat qui. Proident consectetur pariatur nisi.","spans":[]}]},"id":"_ImgRight"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImgRight.storyName = 'imgRight'
