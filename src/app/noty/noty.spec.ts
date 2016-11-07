import { TestBed, async } from '@angular/core/testing';
import { NotyComponent } from './noty';
import { NotyItemComponent } from './notyItem';
import { NotyProps } from './notyPropsInterface';
import { Noty } from './notyProvider';

describe('Noty: noty', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
	      NotyComponent,
	      NotyItemComponent
      ],
	    providers: [Noty]
    });
  });

  it('should create the noty component', async(() => {
    let fixture = TestBed.createComponent(NotyComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should add opts to the correct region', async(() => {
    let fixture = TestBed.createComponent(NotyComponent);
    let app = fixture.debugElement.componentInstance;
	  let props:NotyProps = { message: 'oops', position: 'left-top' };
	  let region = NotyComponent.getNotyRegion(props.position);
	  app.noty.show(props);
    expect(app.messages[region].length).toEqual(1);
  }));
});
