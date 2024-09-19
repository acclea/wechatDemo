if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Welcome_Params {
    timers?: number;
    welcomeImage?: string;
}
import router from "@ohos:router";
class Welcome extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__timers = new ObservedPropertySimplePU(5, this, "timers");
        this.__welcomeImage = new ObservedPropertySimplePU("'images/welcome/welcome_1.jpg'"
        // 随机展示欢迎图
        , this, "welcomeImage");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Welcome_Params) {
        if (params.timers !== undefined) {
            this.timers = params.timers;
        }
        if (params.welcomeImage !== undefined) {
            this.welcomeImage = params.welcomeImage;
        }
    }
    updateStateVars(params: Welcome_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__timers.purgeDependencyOnElmtId(rmElmtId);
        this.__welcomeImage.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__timers.aboutToBeDeleted();
        this.__welcomeImage.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __timers: ObservedPropertySimplePU<number>;
    get timers() {
        return this.__timers.get();
    }
    set timers(newValue: number) {
        this.__timers.set(newValue);
    }
    private __welcomeImage: ObservedPropertySimplePU<string>;
    get welcomeImage() {
        return this.__welcomeImage.get();
    }
    set welcomeImage(newValue: string) {
        this.__welcomeImage.set(newValue);
    }
    // 随机展示欢迎图
    randomWelcome(): string {
        let imagesNumArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let randomNum = Math.floor(Math.random() * imagesNumArr.length);
        this.welcomeImage = 'images/welcome/welcome_' + (randomNum + 1).toString() + '.jpg';
        return this.welcomeImage;
    }
    // 创建一个页面栈对象并传入Navigation
    // pageStack: NavPathStack = new NavPathStack()
    countDown() {
        setInterval(() => {
            if (this.timers <= 0) {
                this.timers = 5;
                // console.log('cd', this.timers)
                // this.pageStack.replacePath({ name: "Index", param: "" })
                router.replaceUrl({ url: 'pages/Index' });
                return;
            }
            this.timers--;
        }, 1000);
        return this.timers;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.alignContent(Alignment.TopEnd);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.randomWelcome());
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Text('跳过:' + this.countDown())
            Text.create('跳过:' + this.timers.toString());
            // Text('跳过:' + this.countDown())
            Text.width(70);
            // Text('跳过:' + this.countDown())
            Text.height(40);
            // Text('跳过:' + this.countDown())
            Text.backgroundColor('#FFF1F6EF');
            // Text('跳过:' + this.countDown())
            Text.borderRadius(15);
            // Text('跳过:' + this.countDown())
            Text.onClick(() => {
                this.timers = 0;
                // 跳转到首页
                router.replaceUrl({ url: 'pages/Index' });
            });
        }, Text);
        // Text('跳过:' + this.countDown())
        Text.pop();
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Welcome";
    }
}
function countDown() {
    let timers: number = setInterval(() => {
        timers--;
        if (timers <= 0) {
            console.log('qq', 999, timers);
        }
        console.log('ww', timers);
    }, 1000);
    return timers;
}
registerNamedRoute(() => new Welcome(undefined, {}), "", { bundleName: "com.example.wechatdemo", moduleName: "entry", pagePath: "pages/Welcome", pageFullPath: "entry/src/main/ets/pages/Welcome", integratedHsp: "false" });
