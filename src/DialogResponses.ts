import {MessageItem} from 'vscode';

export class DialogResponses {
  static skipForNow: MessageItem = {title: 'Skip for now'};
  static yes: MessageItem = {title: 'Yes'};
  static no: MessageItem = {title: 'No'};
  static cancel: MessageItem = {title: 'Cancel', isCloseAffordance: true};
}