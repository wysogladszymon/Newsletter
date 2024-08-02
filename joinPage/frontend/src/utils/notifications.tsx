import { Store } from 'react-notifications-component';

export function addSuccessNotification(title: string, message: string, duration : number = 3000){
  Store.addNotification({
    title: title,
    message: message,
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: duration,
      onScreen: true
    }
  });
}

export function addErrorNotification(title: string, message: string, duration : number = 3000){
  Store.addNotification({
    title: title,
    message: message,
    type: "warning",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: duration,
      onScreen: true
    }
  });
}