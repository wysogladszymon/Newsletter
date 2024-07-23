import { observable, action, makeAutoObservable, computed } from "mobx";
import { generateTemplate } from "../assets/template";

export class EmailStore {
  constructor() {
    makeAutoObservable(this, {
      emailBody: computed,
    });
  }

  @observable loaded = false;

  @observable emailTitle = "Email Title";

  @observable emailHeader = "Email Header";

  @observable emailAuthor = "asia@fitproject.com";

  @observable emailMessage = "";

  @observable inputBody = "Your message";

  @action setInputBody = (inputBody: string) => {
    this.inputBody = inputBody;
  };

  @action setEmailMessage = (message: string) => {
    this.emailMessage = message;
  };
  @action setEmailTitle = (title: string) => {
    this.emailTitle = title;
  };

  @action setEmailHeader = (header: string) => {
    this.emailHeader = header;
  };

  get emailBody() {
    return generateTemplate(this.emailHeader, this.inputBody);
  }

  @action setEmailAuthor = (author: string) => {
    this.emailAuthor = author;
  };

  @action load = () => {
    this.loaded = true;
  };
}
