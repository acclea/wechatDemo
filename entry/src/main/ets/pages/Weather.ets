import {CityModel} from '../dict/WeatherModel'

import ChangeCity from '../views/weather/ChangeCity'
import SideBar from '../views/weather/SideBar'
import Home from '../views/weather/Home'

@Entry
@Component
struct Weather {

  @State isShowSideBar: boolean = false;
  @State selectCity: CityModel = { locationId: 101010100, locationName: '北京' };

  build() {
    SideBarContainer(SideBarContainerType.Embed) {

      // 切换城市
      ChangeCity({ selectCity: $selectCity, isShowSideBar: $isShowSideBar })

      if (this.isShowSideBar) {
        //灰底
        SideBar({ isShowSideBar: $isShowSideBar })
      } else {
        // 内容
        Home({ isShowSideBar: $isShowSideBar, })
        // SideBarContent({ isShowSideBar: $isShowSideBar, selectCity: $selectCity, weatherUiModel: $weatherUiModel })
      }
    }
    .showControlButton(false)
    .showSideBar(this.isShowSideBar)
    .autoHide(false)
    .sideBarWidth(160)
    .width('100%')

  }
}