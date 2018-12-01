import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ListOfFriendsService {

  constructor() { }

 public static get_usuarios(){

   let users: User [] = [
    {
      nick : 'MrRojas' ,
      age: 21,
      idu : 'Javascript',
      friend: true
    },
    {
      nick : 'Monpeco' ,
      age: 36,
      idu : 'C',
      friend: false
    },
    {
      nick : 'APerdomo' ,
      age: 22,
      idu : 'Angular',
      friend: true
    },
    {
      nick : 'EE' ,
      age: 38,
      idu : 'PHP',
      friend: false
    },
    {
      nick : 'Yris' ,
      age: 15,
      idu : 'ORACLE',
      friend: true
    }

   ];


    return users;
    
    
  }
}
