import router from '@ohos.router';
import {SettingsMenuItem} from '../dict/SettingsModel';


@Entry
@Component
struct Setting {

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
    .padding(10)
    .onClick(() => {
      if(url != null){
        // router.pushUrl({url:'pages/Welcome'})
        router.pushUrl({url:url})
      }
    })

    // Divider().strokeWidth(12).color('#FFD5D6D7')
  }

  setingsMenuInfo : SettingsMenuItem[] = [
    {name: '账号与安全', icon: null,  'url': 'pages/Friend'},
    {name: '青少年模式', icon: null,  'url': 'pages/Friend'},
    {name: '关怀模式', icon: null,  'url': 'pages/Friend'},
    {name: '新消息通知', icon: null,  'url': 'pages/Friend'},
    {name: '聊天', icon: null,  'url': 'pages/Friend'},
    {name: '设备', icon: null,  'url': 'pages/Friend'},
    {name: '通用', icon: null,  'url': 'pages/Friend'},
    {name: '隐私', icon: null,  'url': ''},
    {name: '朋友权限', icon: null,  'url': 'pages/Friend'},
    {name: '个人信息与权限', icon: null,  'url': 'pages/Friend'},
    {name: '个人信息收集清单', icon: null,  'url': 'pages/Friend'},
    {name: '第三方信息共享清单', icon: null,  'url': 'pages/Friend'},
    {name: '关于', icon: null,  'url': 'pages/Friend'},
    {name: '帮助与反馈', icon: null,  'url': 'pages/Friend'},
  ]

  build() {
    Column({space:10}) {
      Row(){
        Image('images/systems/chevron_left.svg')
          .height(20)
          .margin({right:150, left:2})
          .onClick(() => {
            router.back()
          })

        Text('设置')
          .fontSize(20)
          .width('60%')
      }
      .height(30)

      List(){
        ForEach(this.setingsMenuInfo, (items:SettingsMenuItem) => {
          ListItem(){
            this.rightBarFunc(items.icon, items.name, items.url)

          }
        })
      }

      Row(){
        Text('切换账号')
          .fontSize(20)
      }

      Row(){
        Text('退出')
          .fontSize(20)
      }
    }
    .height('100%')
    .width('100%')
  }
}