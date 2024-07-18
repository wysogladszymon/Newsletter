import {observable, action, computed} from 'mobx';

export class EmailStore {
  @observable loaded = false;

  @observable emailTitle = '';

  @observable emailBody = '';

  @observable emailAuthor = '';
  
  @action setEmailTitle = (title: string) => {
    this.emailTitle = title;
  };

  @action setEmailBody = (body: string) => {
    this.emailBody = body;
  };

  @action setEmailAuthor = (author: string) => {
    this.emailAuthor = author;
  };

  @action load = () => {
    this.loaded = true;
  }
}