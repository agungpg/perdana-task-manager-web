enum Theme {
    Light = "light",
    Dark = "dark"
}
export type UserSettings = {
    id: string;
    user_id: string;
    active_project_id: string;
    theme: Theme;
    language: string;
    created_at: string;
    updated_at: string;
}