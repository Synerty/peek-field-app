/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MobileContainerComponent} from "./mobile-container.component";
import {VortexService, ComponentLifecycleEventEmitter} from "@synerty/vortexjs";
import {ActivatedRoute} from "@angular/router";

describe('MobileContainerComponent', () => {
    let component: MobileContainerComponent;
    let fixture: ComponentFixture<MobileContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MobileContainerComponent],
            providers: [VortexService, ActivatedRoute]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
