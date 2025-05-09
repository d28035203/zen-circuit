/**
 * AffirmationCategory.ts — zen-circuit
 * @author d28035203
 */

export interface AffirmationCategory {
  title: string;
  data: GalleryPreviewData[];
}

export interface GalleryPreviewData {
  id: number;
  text: string;
  image: any;
}
