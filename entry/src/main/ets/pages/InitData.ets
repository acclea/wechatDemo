@Entry
@Component
struct InitData {


  build() {
    Column() {
      Text('初始化会把自定义数据全部删除')
        .id('InitDataHelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
    }
    .height('100%')
    .width('100%')
  }
}