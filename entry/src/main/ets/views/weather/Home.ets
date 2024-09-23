import {CityModel} from '../../dict/WeatherModel'

// import { LineChart }from '@ohos/mpchart';
import LineChartView from './LineChartView'

@Component
export default struct Home {
  @State cityArr: CityModel[] = [ //城市列表
    { locationId: 101010100, locationName: '北京' }, { locationId: 101280601, locationName: '深圳' },
    { locationId: 101020100, locationName: '上海' }, { locationId: 101250101, locationName: '长沙' },
    { locationId: 101310101, locationName: '海口' }, { locationId: 101070201, locationName: '大连' }];


  @Link isShowSideBar: boolean;
  @State selectCity: CityModel = { locationId: 101010100, locationName: '北京' };

  // @State lineModel: boolean = false;
  scroller: Scroller = new Scroller()

  build() {
    Column({space:10}) {
      Row(){
        Image('images/weather/icon_city.png')
          .height(30)
          .onClick(() => {
            this.isShowSideBar = !this.isShowSideBar;
          })

        Text(this.selectCity.locationName)
          .fontSize(20)
          .margin({left:'40%'})
          .align(Alignment.Center)
      }
      .width('100%')

      Divider().strokeWidth(6).color('#FF6B6BEF')

      Column(){
        Row({space:8}){
          Column(){
            Text('PM')
              .fontSize(14)
            Divider().strokeWidth(3).color('#FF2CF15E')
            Text('2.5')
              .fontSize(14)
          }
          .width('10%')
          .borderColor('#FFF1F5F2')
          // .border()

          Text('15')
            .fontSize(20)
        }
        .width('100%')
      }

      Column(){
        Row({space:8}){
          Column(){
            Text('UV')
              .fontSize(14)
            Divider().strokeWidth(3).color('#fff5c928')
          }
          .width('10%')
          // .borderColor('#FFF5C928')
          // .border()

          Text('弱')
            .fontSize(20)
        }
        .width('100%')
      }

      Row(){
        Text('25')
          .fontSize(100)

        Column(){
          Text('℃')
            .fontSize(30)
          Blank(25)
          Text('体感')
            .fontSize(15)

          Text('23'+'℃')
            .fontSize(15)

        }
      }

      Row(){
        Scroll(this.scroller) {
          LineChartView()
        }
        // .width('100%')
        .scrollable(ScrollDirection.Horizontal) // 滚动方向纵向
        // .scrollBar(BarState.On) // 滚动条常驻显示
      }
      .width('100%')

    }
    .height('100%')
    .width('100%')
    .backgroundImage('images/weather/background.png', ) // ImageRepeat.XY  重复
    .backgroundImageSize({width:'100%',height:'100%'})

  }
}