import { Match } from "navigo";
import { Component } from "../components/Header";

export abstract class Page extends Component {
  protected title: string = "";

  public abstract override render(params?: Match): string;

  protected setTitle(title: string): void {
    this.title = title;
    document.title = `${title} - Portfolio`;
  }
}
