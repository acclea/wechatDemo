if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    currentIndex?: number;
    discoverMenu?: discoverMenuItem[];
    userMenu?: userMenuItem[];
}
import router from "@ohos:router";
import type { DiscoverMenuItem as discoverMenuItem } from '../dict/DiscoverModel';
import type { UserMenuItem as userMenuItem } from '../dict/UserModel';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.discoverMenu = [
            { name: '朋友圈', icon: null, status: true, 'url': 'pages/Friends' },
            { name: '视频号', icon: null, status: true, 'url': null },
            { name: '直播', icon: null, status: true, 'url': null },
            { name: '扫一扫', icon: null, status: true, 'url': null },
            { name: '听一听', icon: null, status: true, 'url': null },
            { name: '看一看', icon: null, status: true, 'url': null },
            { name: '搜一搜', icon: null, status: true, 'url': null },
            { name: '购物', icon: null, status: true, 'url': null },
            { name: '小程序', icon: null, status: true, 'url': null },
            { name: '天气', icon: null, status: true, 'url': null },
        ];
        this.userMenu = [
            { name: '服务', icon: null, isEndBlank: true, 'url': null },
            { name: '收藏', icon: null, isEndBlank: false, 'url': null, },
            { name: '朋友圈', icon: null, isEndBlank: false, 'url': null },
            { name: '表情', icon: null, isEndBlank: true, 'url': null },
            { name: '设置', icon: null, isEndBlank: false, 'url': 'pages/Settings' },
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.discoverMenu !== undefined) {
            this.discoverMenu = params.discoverMenu;
        }
        if (params.userMenu !== undefined) {
            this.userMenu = params.userMenu;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    tabBuilderFunc(title: string, targetIndex: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.width("100%");
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex == targetIndex ? selectedImg : normalImg);
            Image.size({ width: 30, height: 30 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontColor(this.currentIndex == targetIndex ? '#FF84E55C' : '#6B6B6B');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rightBarFunc(icon: Resource | null, title: string, url: string | null, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.onClick(() => {
                // AlertDialog.show({ title: 'title',
                //   subtitle: 'subtitle',
                //   message: 'text',}
                // )
                if (url != null) {
                    // router.pushUrl({url:'pages/Welcome'})
                    router.pushUrl({ url: url });
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (icon != null) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(icon);
                        Image.height(20);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/systems/chevron_right.svg');
            Image.height(20);
        }, Image);
        Row.pop();
    }
    private discoverMenu: discoverMenuItem[];
    private userMenu: userMenuItem[];
    headerFunc(title: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(80);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.width("80%");
            Text.fontSize(20);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/systems/magnifyingglass.svg');
            Image.height(20);
            Image.padding({ right: 20 });
            Image.onClick(() => {
                console.info('搜索');
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/systems/plus.svg');
            Image.height(20);
            Image.padding({ right: 20 });
            Image.onClick(() => {
                AlertDialog.show({ title: 'title',
                    subtitle: 'subtitle',
                    message: 'text', });
            });
        }, Image);
        Row.pop();
    }
    userListHeaderFunc(icon: string | null, title: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.height(50);
            Row.width('100%');
            Row.padding({ left: 12 });
            Row.alignItems(VerticalAlign.Top);
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (icon != null) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(icon);
                        Image.height(35);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create('images/systems/person_badge_plus.svg');
                        Image.height(35);
                    }, Image);
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(20);
            Text.padding({ left: 12 });
        }, Text);
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create();
            Tabs.width('100%');
            Tabs.height('100%');
            Tabs.barPosition(BarPosition.End);
            Tabs.animationDuration(0);
            Tabs.backgroundColor('#F1F3F5');
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 2 });
                    Column.height('100%');
                }, Column);
                this.headerFunc.bind(this)('首页', this);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create({ space: 5 });
                    Row.width('100%');
                    Row.alignItems(VerticalAlign.Top);
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('images/systems/avatar_default.jpg');
                    Image.height(80);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 10 });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width('70%');
                    Row.borderRadius(15);
                    Row.padding({ left: 12 });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('用户昵称');
                    Text.fontSize(20);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // .margin(60)
                    Blank.create();
                }, Blank);
                // .margin(60)
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('昨天');
                    Text.fontSize(12);
                }, Text);
                Text.pop();
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('聊天内容');
                    Text.fontSize(12);
                    Text.width('60%');
                }, Text);
                Text.pop();
                Column.pop();
                Row.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilderFunc.call(this, '首页', 0, { "id": 16777227, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" }, { "id": 16777226, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 2 });
                    Column.height('100%');
                }, Column);
                this.headerFunc.bind(this)('通讯录', this);
                this.userListHeaderFunc.bind(this)('images/systems/person_badge_plus.svg', '新的好友', this);
                this.userListHeaderFunc.bind(this)('images/systems/person.svg', '仅聊天的好友', this);
                this.userListHeaderFunc.bind(this)('images/systems/person_2_fill.svg', '群聊', this);
                this.userListHeaderFunc.bind(this)('images/systems/person_2_fill.svg', '标签', this);
                this.userListHeaderFunc.bind(this)('images/systems/person_2_fill.svg', '公众号', this);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create({ space: 10 });
                    Row.width('100%');
                    Row.padding({ left: 12 });
                    Row.alignItems(VerticalAlign.Top);
                    Row.justifyContent(FlexAlign.Start);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('images/systems/avatar_default.jpg');
                    Image.height(40);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('用户昵称');
                    Text.fontSize(20);
                    Text.padding({ left: 12 });
                }, Text);
                Text.pop();
                Row.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilderFunc.call(this, '联系人', 1, { "id": 16777232, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" }, { "id": 16777231, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height('100%');
                    Column.width('100%');
                }, Column);
                this.headerFunc.bind(this)('发现', this);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    List.create({ space: 5 });
                }, List);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const discoverItems = _item;
                        {
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                itemCreation2(elmtId, isInitialRender);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const itemCreation2 = (elmtId, isInitialRender) => {
                                ListItem.create(deepRenderFunction, true);
                                ListItem.width('100%');
                                ListItem.height(40);
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.rightBarFunc.bind(this)(discoverItems.icon, discoverItems.name, discoverItems.url, this);
                                ListItem.pop();
                            };
                            this.observeComponentCreation2(itemCreation2, ListItem);
                            ListItem.pop();
                        }
                    };
                    this.forEachUpdateFunction(elmtId, this.discoverMenu, forEachItemGenFunction);
                }, ForEach);
                ForEach.pop();
                List.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilderFunc.call(this, '发现', 2, { "id": 16777224, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" }, { "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.height('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.width('100%');
                    Column.height('100%');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('images/systems/avatar_default.jpg');
                    Image.height(80);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('用户昵称：鸿蒙');
                    Text.fontSize(20);
                    Text.width('100%');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create({ space: 5 });
                    Row.width('100%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('系统账号：harmony');
                    Text.fontSize(20);
                    Text.width('60%');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('images/systems/qrcode_green.svg');
                    Image.height(30);
                    Image.padding({ right: 20 });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create('images/systems/chevron_right.svg');
                    Image.height(20);
                }, Image);
                Row.pop();
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // 分割线
                    Divider.create();
                    // 分割线
                    Divider.strokeWidth(12);
                    // 分割线
                    Divider.color('#FFD5D6D7');
                }, Divider);
                Row.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    List.create();
                }, List);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const userItems = _item;
                        {
                            const itemCreation = (elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                itemCreation2(elmtId, isInitialRender);
                                if (!isInitialRender) {
                                    ListItem.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            };
                            const itemCreation2 = (elmtId, isInitialRender) => {
                                ListItem.create(deepRenderFunction, true);
                                ListItem.width('100%');
                                ListItem.height(47);
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.rightBarFunc.bind(this)(userItems.icon, userItems.name, userItems.url, this);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    If.create();
                                    if (userItems.isEndBlank) {
                                        this.ifElseBranchUpdateFunction(0, () => {
                                        });
                                    }
                                    else {
                                        this.ifElseBranchUpdateFunction(1, () => {
                                        });
                                    }
                                }, If);
                                If.pop();
                                ListItem.pop();
                            };
                            this.observeComponentCreation2(itemCreation2, ListItem);
                            ListItem.pop();
                        }
                    };
                    this.forEachUpdateFunction(elmtId, this.userMenu, forEachItemGenFunction);
                }, ForEach);
                ForEach.pop();
                List.pop();
                Column.pop();
                Column.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilderFunc.call(this, '我', 3, { "id": 16777230, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" }, { "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.wechatdemo", "moduleName": "entry" });
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.wechatdemo", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false" });
