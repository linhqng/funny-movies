export default interface MovieShare {
    items: Array<Item>;
}

export interface Item {
    snippet: Snippet;
    statistics: Statistics;
    player: Player;
}

export interface Snippet {
    publishedAt: string;
    title: string;
    description: string;
    channelTitle: string;
}

export interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
}

export interface Player {
    embedHtml: string;
}
