import { Project, Status } from "../models/project-model";
import { DragTarget } from "../models/drag-drop";
import { Autobind } from "../decorators/auto-bind";
import { projectState } from "../state/project";
import { ProjectItem } from "./item";

export class ProjectList implements DragTarget {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.assignedProjects = [];

    this.templateEl = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById("app") as HTMLElement;
    const importedTemplate = document.importNode(this.templateEl.content, true);
    this.element = importedTemplate.querySelector("section") as HTMLElement;
    this.element.id = `${this.type}-projects`;
    this.attach();

    this.init();
    this.renderContent();
  }

  private init() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj: Project) => {
        if (this.type === "active") {
          return prj.status === Status.Active;
        } else {
          return prj.status === Status.Finished;
        }
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private attach() {
    this.hostEl.insertAdjacentElement("beforeend", this.element);
  }

  @Autobind
  dragOverHandler(e: DragEvent): void {
    if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
      e.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @Autobind
  dropHandler(e: DragEvent): void {
    const prjId = e.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? Status.Active : Status.Finished
    );
  }

  @Autobind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }
}
