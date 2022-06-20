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
      mock: {"variation":"default","name":"Default","slice_type":"article_slice","items":[{"content":[{"type":"paragraph","text":"Fugiat anim consectetur duis ullamco cillum irure occaecat adipisicing et veniam ex aliqua id quis magna. Do excepteur esse quis enim consequat ut non incididunt cupidatat et est. Labore laborum nulla ea consectetur non ea sint.","spans":[]}]},{"content":[{"type":"paragraph","text":"Nulla duis in ex laboris commodo adipisicing officia aute fugiat non eu nisi nulla consectetur culpa. Adipisicing anim exercitation adipisicing labore quis consequat ex labore eiusmod ea minim sint ad.","spans":[]}]}],"primary":{},"id":"_Default"}
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
      mock: {"variation":"single","name":"single","slice_type":"article_slice","items":[],"primary":{"content":[{"type":"paragraph","text":"Duis irure est adipisicing amet sunt anim amet est laboris labore aliqua occaecat nulla. Ipsum minim ullamco fugiat esse eiusmod.","spans":[]}]},"id":"_Single"}
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
      mock: {"variation":"imgLeft","name":"imgLeft","slice_type":"article_slice","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"content":[{"type":"paragraph","text":"Aliquip elit officia ad culpa eu veniam. Magna excepteur consectetur veniam eiusmod laboris mollit do et irure.","spans":[]}]},"id":"_ImgLeft"}
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
      mock: {"variation":"imgRight","name":"imgRight","slice_type":"article_slice","items":[],"primary":{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"content":[{"type":"paragraph","text":"Magna non cillum sit voluptate nostrud ea Lorem cillum eu. Qui veniam irure deserunt tempor sint qui magna. Tempor excepteur incididunt do dolore nulla ad do id in ullamco.","spans":[]}]},"id":"_ImgRight"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_ImgRight.storyName = 'imgRight'
