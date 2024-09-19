import router from '@ohos.router';

@Entry
@Component
struct Welcome {
  @State timers: number = 5;
  @State welcomeImage: string = "'images/welcome/welcome_1.jpg'"

  // 随机展示欢迎图
  randomWelcome():string {
    let imagesNumArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let randomNum = Math.floor(Math.random() * imagesNumArr.length)
    this.welcomeImage = 'images/welcome/welcome_'+ (randomNum+1).toString()+'.jpg'
    return this.welcomeImage
  }


  // 创建一个页面栈对象并传入Navigation
  // pageStack: NavPathStack = new NavPathStack()

  countDown(){
      setInterval(() =>{
        if (this.timers <= 0){
          this.timers = 5
          // console.log('cd', this.timers)
          // this.pageStack.replacePath({ name: "Index", param: "" })
          router.replaceUrl({url:'pages/Index'})
          return
        }
        this.timers --
      }, 1000)

    return this.timers
  }


  build() {
    Column() {
      Stack() {
        Image(this.randomWelcome())
        // Text('跳过:' + this.countDown())
        Text('跳过:' + this.timers.toString())
          .width(70)
          .height(40)
          .backgroundColor('#FFF1F6EF')

            // 组件圆角
          .borderRadius(15)

            // 点击跳过
          .onClick(() => {
            this.timers = 0

            // 跳转到首页
            router.replaceUrl({url:'pages/Index'})
          })

      }
      .alignContent(Alignment.TopEnd)
    }
    .width('100%')
    .height('100%')
  }
}

function countDown(){
  let timers:number = setInterval(() =>{
    timers --
    if (timers <= 0){
      console.log('qq', 999, timers)
    }
    console.log('ww', timers)
  }, 1000)
  return timers
}

// console.log('rrr', countDown())