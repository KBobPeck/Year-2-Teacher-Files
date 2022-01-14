import { Validatable, validate } from "../util/validation.js";
import { Autobind } from "../decorators/auto-bind.js";
import { projectState } from "../state/project.js";

export class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  formEl: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    this.templateEl = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById("app") as HTMLElement;

    //! this creates a clone of the template and then grab the form from the clone
    const importedTemplate = document.importNode(this.templateEl.content, true);
    this.formEl = importedTemplate.querySelector("form") as HTMLFormElement;
    this.formEl.id = "user-input";

    this.titleInputEl = this.formEl.querySelector("#title") as HTMLInputElement;
    this.descInputEl = this.formEl.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputEl = this.formEl.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.attach();
    this.init();
  }

  //! private makes the method only usable in the class
  private attach() {
    this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
  }

  private init() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }

  @Autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInputs = this.gatherUserInputs();
    if (userInputs) {
      const [title, desc, people] = userInputs;
      console.log(title, desc, people);
      projectState.addProject(title, desc, people);
    }
  }

  private gatherUserInputs(): [string, string, number] | void {
    const userTitle = this.titleInputEl.value;
    const userDesc = this.descInputEl.value;
    const userPeople = +this.peopleInputEl.value;

    const titleIsValid: Validatable = {
      value: userTitle,
      required: true,
      minLength: 1,
    };

    const descIsValid: Validatable = {
      value: userDesc,
      minLength: 5,
      required: true,
    };

    const peopleIsValid: Validatable = {
      value: userPeople,
      min: 1,
      max: 5,
    };

    if (
      validate(titleIsValid) &&
      validate(descIsValid) &&
      validate(peopleIsValid)
    ) {
      this.clearInputs();
      return [userTitle, userDesc, userPeople];
    }

    console.log("Something is wrong, fix it.");
    return;
  }

  private clearInputs() {
    this.titleInputEl.value = "";
    this.descInputEl.value = "";
    this.peopleInputEl.value = "";
  }
}
