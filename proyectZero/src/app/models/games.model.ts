export interface Games {
    id: number;
    title: string;
    thumbnail: string;
    status:string;
    short_description: string;
    description:string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    minimum_system_requirements:
    {
        os:string,
        processor:string,
        memory:string,
        graphics:string,
        storage:string
    };
    screenshots:any[]
}