import { Component, HostListener, signal } from '@angular/core';
import { portfolio, ProjectImage } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly data = portfolio;
  protected readonly selectedImage = signal<ProjectImage | null>(null);

  protected openImage(image: ProjectImage): void {
    this.selectedImage.set(image);
    document.body.style.overflow = 'hidden';
  }

  protected closeImage(): void {
    this.selectedImage.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.selectedImage()) {
      this.closeImage();
    }
  }
}
