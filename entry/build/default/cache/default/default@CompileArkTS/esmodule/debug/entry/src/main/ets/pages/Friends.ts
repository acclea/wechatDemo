if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Friend_Params {
    message?: string;
}
import router from "@ohos:router";
class Friend extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Friend_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Friend_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
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
            Text.create('朋友圈');
            Text.fontSize(20);
            Text.width('60%');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ placeholder: '朋友圈内容…………' });
            TextArea.fontSize(12);
            TextArea.fontColor(Color.Grey);
            TextArea.textAlign(TextAlign.Start);
        }, TextArea);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Friend";
    }
}
registerNamedRoute(() => new Friend(undefined, {}), "", { bundleName: "com.example.wechatdemo", moduleName: "entry", pagePath: "pages/Friends", pageFullPath: "entry/src/main/ets/pages/Friends", integratedHsp: "false" });
