import { Injectable } from '@angular/core';
import {Role} from '../models/role';

export class roleFactory {
  create(roleInfo:any){
      return new Role(roleInfo);
  }
}

