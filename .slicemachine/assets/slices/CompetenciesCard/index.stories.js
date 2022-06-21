import MyComponent from '../../../../slices/CompetenciesCard';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/CompetenciesCard'
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
      mock: {"variation":"default","name":"Default","slice_type":"competencies_card","items":[{"compOld":"repurpose granular channels","compNew":"brand viral communities"},{"compOld":"aggregate one-to-one communities","compNew":"syndicate efficient markets"},{"compOld":"enhance end-to-end architectures","compNew":"seize 24/365 channels"},{"compOld":"whiteboard cross-platform markets","compNew":"grow back-end applications"},{"compOld":"matrix rich e-services","compNew":"envisioneer cutting-edge channels"}],"primary":{"componentIndex":"implement sexy synergies","title":[{"type":"heading2","text":"Maximize scalable technologies","spans":[]}],"description":[{"type":"paragraph","text":"Commodo nostrud in consequat cillum aute minim aute est ad deserunt laboris.","spans":[]}],"compTitle":[{"type":"paragraph","text":"Cillum pariatur dolore labore deserunt. Qui esse pariatur velit ut excepteur tempor officia.","spans":[]}],"compDescription":[{"type":"paragraph","text":"Ex officia dolor incididunt deserunt pariatur dolor cupidatat exercitation velit labore do cupidatat duis.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
