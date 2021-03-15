import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserDetailsComponent } from '../user-list-presentation/user-details/user-details.component';

@Injectable()
export class UserListPresenterService {

  /* subject for user delete Id */
  public userId: Subject<number> = new Subject<number>();
  public userId$: Observable<number>

  constructor(public overlay: Overlay) { 
    this.userId$ = this.userId.asObservable();
  }

  /* send id to presentation component*/
  public sendUserDeleteId(id: number) {
    this.userId.next(id);
  }

  /* for binding addressForm in presentation*/
  public bindAddressForm(): FormGroup {
    return new FormGroup({
      address: new FormControl('')
    })
  }

  /* assign overlay */
  openUserOverlay(user: User){
    this.overlayConfig(user);
  }

  /* set overlay configuration */
  overlayConfig(user: User) : ComponentRef<UserDetailsComponent>{

    const overlayConfig : OverlayConfig = new OverlayConfig();

    /* GlobalPositionStrategy */
    overlayConfig.positionStrategy = this.overlay.position().global()
    .centerHorizontally()
    .centerVertically();

    overlayConfig.hasBackdrop = true;
    
    /* create overlay Reference */
    const overlayRef = this.overlay.create(overlayConfig);

    /* component portal for UserDetailComponent */
    const UserDetailPortal: ComponentPortal<UserDetailsComponent> = new ComponentPortal<UserDetailsComponent>(UserDetailsComponent);
    
    /* attach portal with overlay Reference */
    const componentRef: ComponentRef<UserDetailsComponent> = overlayRef.attach(UserDetailPortal);

    /* for assigning data to the  component */
    componentRef.instance.userData = user;

    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }
}
