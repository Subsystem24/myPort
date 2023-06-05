import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['sidebar'];

  connect() {
    console.log("Hello")
    this.sidebarTarget.classList.toggle('left-[-300px]');
  }
}
