import router from '@ohos.router';
import {DiscoverMenuItem as discoverMenuItem} from '../dict/DiscoverModel'
import {UserMenuItem as userMenuItem} from '../dict/UserModel'
@Entry
@Component
struct Index {
  @State currentIndex: number = 0;

  @Builder
  tabBuilderFunc(title: string, targetIndex: number, selectedImg: Resource, normalImg: Resource) {
    Column({space:5}) {
      Image(this.currentIndex == targetIndex ? selectedImg : normalImg)
        .size({ width: 30, height: 30 })

      Text(title)
        .fontColor(this.currentIndex == targetIndex ? '#FF84E55C' : '#6B6B6B')

        // 中间对齐
        .textAlign(TextAlign.Center)
    }
    .width("100%")
    .height(50)
    .justifyContent(FlexAlign.Center)

  }

  @Builder
  rightBarFunc(icon:Resource|null, title: string, url:string|null){
    Row(){
      if (icon != null){
        Image(icon)
          .height(20)
      }
      Text(title)
        .fontSize(20)
      Blank()
      Image('images/systems/chevron_right.svg')
        .height(20)
    }
    .width('100%')
    .onClick(() => {
      // AlertDialog.show({ title: 'title',
      //   subtitle: 'subtitle',
      //   message: 'text',}
      // )
      if(url != null){
        // router.pushUrl({url:'pages/Welcome'})
        router.pushUrl({url:url})
      }
    })

    // Divider().strokeWidth(12).color('#FFD5D6D7')
  }

  discoverMenu:discoverMenuItem[] = [
    {name: '朋友圈', icon: null, status:true, 'url': 'pages/Friends'},
    {name: '视频号', icon: null, status:true, 'url': 'pages/Friends'},
    {name: '直播', icon: null, status:true, 'url': 'pages/Friends'},
    {name: '扫一扫', icon: null, status:true, 'url': null},
    {name: '听一听', icon: null, status:true, 'url': null},
    {name: '看一看', icon: null, status:true, 'url': null},
    {name: '搜一搜', icon: null, status:true, 'url': null},
    {name: '购物', icon: null, status:true, 'url': null},
    {name: '小程序', icon: null, status:true, 'url': 'pages/Friends'},
    {name: '天气', icon: null, status:true, 'url': 'pages/Weather'},
  ]

  userMenu:userMenuItem[] = [
    {name: '服务', icon: null, isEndBlank:true, 'url': 'pages/Settings'},
    {name: '收藏', icon: null, isEndBlank:false, 'url': 'pages/Settings',},
    {name: '朋友圈', icon: null, isEndBlank:false, 'url': 'pages/Settings'},
    {name: '表情', icon: null, isEndBlank:true, 'url': 'pages/Settings'},
    {name: '设置', icon: null, isEndBlank:false, 'url': 'pages/Settings'},
    {name: '软件初始化', icon: null, isEndBlank:false, 'url': 'pages/InitData'},
  ]

  @Builder
  headerFunc(title:string){
    Row(){
      Text(title)
        .width("80%")
        .fontSize(20)
        .textAlign(TextAlign.Center)

      Blank()
      Image('images/systems/magnifyingglass.svg')
        .height(20)
        .padding({right:20})
        .onClick(() =>{
          console.info('搜索')
        })

      Image('images/systems/plus.svg')
        .height(20)
        .padding({right:20})
        .onClick(() =>{
          AlertDialog.show({ title: 'title',
            subtitle: 'subtitle',
            message: 'text',})
        })
    }
    .height(80)
    .width('100%')
  }

  @Builder
  userListHeaderFunc(icon:string|null, title:string){
    Row({space:10}){
      if(icon != null){
        Image(icon)
          .height(35)
      }else {
        Image('images/systems/person_badge_plus.svg')
          .height(35)
      }

      Text(title)
        .fontSize(20)
        .padding({ left: 12 })
    }
    .height(50)
    .width('100%')
    .padding({ left: 12 })
    .alignItems(VerticalAlign.Top)
    .justifyContent(FlexAlign.Start)
  }


  build() {
    Column() {
      Tabs() {
        TabContent() {
          Column({space:2}){
            this.headerFunc('首页')

            Row({space:5}){
              Image('images/systems/avatar_default.jpg')
                .height(80)

              Column({space:10}){

                Row(){
                  Text('用户昵称')
                    .fontSize(20)
                    // .margin(60)

                  Blank()

                  Text('昨天')
                    .fontSize(12)
                    // .width('45%')

                }
                .width('70%')
                // .backgroundColor(0xFFFFFF)
                .borderRadius(15)
                .padding({ left: 12 })

                Text('聊天内容')
                  .fontSize(12)
                  .width('60%')
              }
            }

            .width('100%')
            .alignItems(VerticalAlign.Top)
            .justifyContent(FlexAlign.Start)

          }
          .height('100%')

        }
        .tabBar(this.tabBuilderFunc('首页', 0, $r('app.media.house_light'), $r('app.media.house')))

        TabContent() {
          Column({space:2}){
            this.headerFunc('通讯录')

            this.userListHeaderFunc('images/systems/person_badge_plus.svg', '新的好友')

            this.userListHeaderFunc('images/systems/person.svg', '仅聊天的好友')

            this.userListHeaderFunc('images/systems/person_2_fill.svg', '群聊')

            this.userListHeaderFunc('images/systems/person_2_fill.svg', '标签')

            this.userListHeaderFunc('images/systems/person_2_fill.svg', '公众号')

            Row({space:10}){
              Image('images/systems/avatar_default.jpg')
                .height(40)

              Text('用户昵称')
                .fontSize(20)
                .padding({ left: 12 })
            }

            .width('100%')
            .padding({ left: 12 })
            .alignItems(VerticalAlign.Top)
            .justifyContent(FlexAlign.Start)

          }
          .height('100%')
        }
        .tabBar(this.tabBuilderFunc('联系人', 1, $r('app.media.person_square_fill_light'),
          $r('app.media.person_square_fill')))

        TabContent() {
          Column() {
            this.headerFunc('发现')

            List({space:5}) {
              ForEach(this.discoverMenu, (discoverItems:discoverMenuItem) =>{
                ListItem(){
                  this.rightBarFunc(discoverItems.icon, discoverItems.name, discoverItems.url)
                  // Divider().strokeWidth(12).color('#FFD5D6D7')
                }
                .width('100%')
                .height(40)

              })
            }

          }
          .height('100%')
          .width('100%')
        }
        .tabBar(this.tabBuilderFunc('发现', 2, $r('app.media.eye_light'), $r('app.media.eye')))

        TabContent() {
          Column(){
            Column(){
              Row(){
                Image('images/systems/avatar_default.jpg')
                  .height(80)

                Column(){
                  Text('用户昵称：鸿蒙')
                    .fontSize(20)
                    .width('100%')

                  Row({space:5}){
                    Text('系统账号：harmony')
                      .fontSize(20)
                      .width('60%')

                    Image('images/systems/qrcode_green.svg')
                      .height(30)
                      .padding({right:20})

                    Image('images/systems/chevron_right.svg')
                      .height(20)
                  }
                  .width('100%')

                }

                // 分割线
                Divider().strokeWidth(12).color('#FFD5D6D7')
              }

              List() {
                ForEach(this.userMenu, (userItems:userMenuItem) =>{
                  ListItem(){
                    this.rightBarFunc(userItems.icon, userItems.name, userItems.url)
                    if(userItems.isEndBlank){
                      // Divider()
                      //   .height(20)
                      //   .strokeWidth(12).color('#FFD5D6D7')
                    }
                  }
                  .width('100%')
                  .height(47)
                })
              }


            }
            .width('100%')
            .height('100%')
          }
          .height('100%')

        }
        .tabBar(this.tabBuilderFunc('我', 3, $r('app.media.person_light'), $r('app.media.person')))

      }
      .width('100%')
      .height('100%')

      // 选项卡位置
      .barPosition(BarPosition.End)

      //滑动
      // .scrollable(true)

      .animationDuration(0)
      .backgroundColor('#F1F3F5')

      // 跟踪选中
      .onChange((index: number) => {
        this.currentIndex = index
      })

    }.width('100%')
  }
}

