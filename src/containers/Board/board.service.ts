import { State } from 'types';

export class BoardService {
  private static STATE_KEY = 'trello-clone-state';

  static saveState(state: State) {
    localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
  }

  static getState(): State | undefined {
    const serializedState = localStorage.getItem(this.STATE_KEY);
    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  }
}
