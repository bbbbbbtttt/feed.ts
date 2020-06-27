///i think if you change users to posts you can take the post

//but i don't know how

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { UserService } from '../user.service';
import { AlertController, ModalController } from '@ionic/angular'

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx'
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';




export class SharedModule {}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
 
  currentposition;
  height;
  minimumThreshold;
  startPosition;

  mainusers: AngularFirestoreDocument
  
  sub
  username: string
  profilePic: string
  userPosts
  posts

 //you can see i tried a lot of things( titre: string
  author:string
  date: string 
  postboost1
  postboost2
  postboost3
  postsboost1
  postsboost2
  postsboost3
  post
  num
   effect: string
    desc2: string 
 //    desc: string)
 
  constructor(  private popoverController: PopoverController,private nativePageTransitions: NativePageTransitions,private modalController: ModalController,private afs: AngularFirestore, private user: UserService, private router: Router, private alertController: AlertController) {

  this.mainusers = afs.doc(`users/${user.getUID()}`)
    
  this.sub = this.mainuser.valueChanges().subscribe(event =>{

    
    
    this.posts = event.posts
    
    this.username = event.username
    
    this.profilePic = event.profilePic
    
    this.date = event.date
    this.titre = event.titre
    this.num = event.num
      
    
  })
 
 

      
    

  
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
}

  ngOnInit() {


    }
    



  async lets() {
    const alert = await this.alertController.create({
      header: 'En cours de création...',
      message: 'les story arrivent bientôt il a des mises a jours toutes les semaines, donner nous des idées',
      buttons: [
        {
          text: 'vous avez des idées?',
          
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.router.navigate(['/option'])
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  
  
async flipPage() {
  
    
      const alert = await this.alertController.create({
        header: 'bientot disponible',
        message: "il n'y a pas encore assez d'annonce pour cette option ",
        buttons: ['Cool!']
     
  
    });

    await alert.present();

  
  
  
  
  
 

}
