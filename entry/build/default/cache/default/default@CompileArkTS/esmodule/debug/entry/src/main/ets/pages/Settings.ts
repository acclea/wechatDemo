if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Setting_Params {
    setingsMenuInfo?: SettingsMenuItem[];
}
import router from "@ohos:router";
import type { SettingsMenuItem } from '../dict/SettingsModel';
class Setting extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setingsMenuInfo = [
            { name: '账号与安全', icon: null, 'url': 'pages/Friend' },
            { name: '青少年模式', icon: null, 'url': 'pages/Friend' },
            { name: '关怀模式', icon: null, 'url': 'pages/Friend' },
            { name: '新消息通知', icon: null, 'url': 'pages/Friend' },
            { name: '聊天', icon: null, 'url': 'pages/Friend' },
            { name: '设备', icon: null, 'url': 'pages/Friend' },
            { name: '通用', icon: null, 'url': 'pages/Friend' },
            { name: '隐私', icon: null, 'url': '' },
            { name: '朋友权限', icon: null, 'url': 'pages/Friend' },
            { name: '个人信息与权限', icon: null, 'url': 'pages/Friend' },
            { name: '个人信息收集清单', icon: null, 'url': 'pages/Friend' },
            { name: '第三方信息共享清单', icon: null, 'url': 'pages/Friend' },
            { name: '关于', icon: null, 'url': 'pages/Friend' },
            { name: '帮助与反馈', icon: null, 'url': 'pages/Friend' },
        ];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Setting_Params) {
        if (params.setingsMenuInfo !== undefined) {
            this.setingsMenuInfo = params.setingsMenuInfo;
        }
    }
    updateStateVars(params: Setting_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    rightBarFunc(icon: Resource | null, title: string, url: string | null, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(10);
            Row.onClick(() => {
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
    private setingsMenuInfo: SettingsMenuItem[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.height('100%');
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(30);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('images/systems/chevron_left.svg');
            Image.height(20);
            Image.margin({ right: 150, left: 2 });
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('设置');
            Text.fontSize(20);
            Text.width('60%');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const items = _item;
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
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.rightBarFunc.bind(this)(items.icon, items.name, items.url, this);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.setingsMenuInfo, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('切换账号');
            Text.fontSize(20);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('退出');
            Text.fontSize(20);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Setting";
    }
}
registerNamedRoute(() => new Setting(undefined, {}), "", { bundleName: "com.example.wechatdemo", moduleName: "entry", pagePath: "pages/Settings", pageFullPath: "entry/src/main/ets/pages/Settings", integratedHsp: "false" });
