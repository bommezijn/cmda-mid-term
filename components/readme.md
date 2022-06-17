# Components

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
      :content="`dfg`"
    />
```

### Image Left
![CleanShot 2022-06-14 at 11 47 24](https://user-images.githubusercontent.com/13199349/173548316-5b7aa926-5db6-468f-a497-bd69c699111f.png)
```
    <ArticleSection
      pos="imgRight"
      :content="`abc`"
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