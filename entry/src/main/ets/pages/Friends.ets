import router from '@ohos.router';

@Entry
@Component
struct Friend {
  @State message: string = 'Hello World';

  build() {
    Column(){
      Row(){
        Image('images/systems/chevron_left.svg')
          .height(20)
          .margin({right:150, left:2})
          .onClick(() => {
            router.back()
          })

        Text('朋友圈')
          .fontSize(20)
          .width('60%')
      }
      .height(30)

      TextArea({placeholder:'朋友圈内容…………'})
        .fontSize(12)
        .fontColor(Color.Grey)
        .textAlign(TextAlign.Start)
    }
    .height('100%')
    .width('100%')
  }
}