export interface Project {
  ID: string;
  Name: string;
  Thumbnail: string;
  Description: string;
  CreatedAt: string;   // ISO timestamp
  CreatedBy: string;
  UpdatedAt: string;   // ISO timestamp
  UpdatedBy: string;
  StatusDefault: string;
  DoneStatusID: string;
}