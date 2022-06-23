# Components

## [CardSwitch](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/CardSwitch.vue)
`CardSwitch` component bestaat uit twee visuele variaties waar de gebruiker uit kan kiezen om verschil tussen twee contexten te zien. Component accepteert meerdere props zoals hieronder benoemd.
| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |

## [NavigationHeader](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/NavigationHeader.vue)
`NavigationHeader` component is een layout component waarmee de gebruiker kan navigeren door de website. Deze ontvangt een object van URL's. Dit moment is deze nog statisch.


| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |

## [QuoteComp](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/QuoteComp.vue)
`QuoteComp` component, een visuele intepretatie en een uniek component. De gebruiker kan als digital designer hier op een verstandige wijze kleuren van aanpassen.


| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |
## [TimeLineComp](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/TimeLineComp.vue)
`TimeLineComp` component, een visueel component waar de gebruiker door de tijdlijn kan gaan van een laatste jaars student.  een visuele intepretatie en een uniek component. De gebruiker kan als digital designer hier op een verstandige wijze kleuren van aanpassen.


| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |
## [generalModal](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/generalModal.vue)
`generalModal` component, een modal component dat herbruikbaar is voor de webapplicatie.


| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |
## [popupComponent](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/popupComponent.vue)
`popupComponent` component, Een unieke component met cards waar je per sectie kan zien wat de content is.


| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |
## [summaryComponent](https://github.com/KaivWezel/cmda-mid-term/blob/staging/dev/components/summaryComponent.vue)
`summaryComponent` component, Het sluitende component voor de pagina. hier zal het standaard worden afgesloten. 


| Prop  | Type|value | Description  |
|---|---|---|---|
| |  |   |   |
||  | |   |
|| | |   |



## [ArticleSection](https://github.com/KaivWezel/cmda-mid-term/blob/slice/article/components/ArticleSection.vue)
`ArticleSection` component bestaat uit drie variaties waar de developer uit kan kiezen om content te structureren. Component accepteert meerdere props zoals hieronder benoemd.
| Prop  | Type|value | Description  |
|---|---|---|---|
|**pos** |  `String` | single, imgLeft, imgRight  | Type of article, Defaults to multiple articles  |
|**img** |  `String` | url or default image |  URL string for the image, defaults to TestImage.jpeg |
|**:content**| `String (String[])`  | text or an array of text  | The content of the articles, can be one or more.  |



### Image Right
![CleanShot 2022-06-14 at 11 47 03](https://user-images.githubusercontent.com/13199349/173548242-00cb9d47-e5b5-4768-9d87-f512a7cb1488.png)
```
    <ArticleSection
      pos="imgLeft"
      content="`dfg`"
    />
```

### Image Left
![CleanShot 2022-06-14 at 11 47 24](https://user-images.githubusercontent.com/13199349/173548316-5b7aa926-5db6-468f-a497-bd69c699111f.png)
```
    <ArticleSection
      pos="imgRight"
      content="`abc`"
    />
```

### Multiple Sections
![CleanShot 2022-06-14 at 11 48 11](https://user-images.githubusercontent.com/13199349/173548489-d5ea4700-1e87-4fab-b152-1ae7c80378f2.png)
```
    <ArticleSection
      pos=""
      :content="[
        `xyz`,
        `abc`,
        `hjk`,
      ]"
    />
```