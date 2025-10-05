import { AppState, Page, StateListener } from "../types/index";

export class StateManager {
  private state: AppState;
  private listeners: StateListener[] = [];

  constructor() {
    this.state = {
      currentPage: Page.Home,
      isLoading: false,
    };
  }

  public setState(newState: Partial<AppState>): void {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }

  public getState(): AppState {
    return { ...this.state };
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.state));
  }

  public setLoading(isLoading: boolean): void {
    this.setState({ isLoading });
  }

  public setCurrentPage(page: Page): void {
    this.setState({ currentPage: page });
  }
}
