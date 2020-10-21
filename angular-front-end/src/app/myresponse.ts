export interface MyResponse {
    posts: Post[];
    totalResults: number;
    moreResultsAvailable: number;
    next: string;
    requestsLeft: number;
    warnings: null;
}
export interface Article {
    _id: { $oid: string; }; url: string; time: string; paragraph: string;
 }
 
export interface MyNewResponse {
   articles: Article[];
}

export interface Post {
    thread: Thread;
    uuid: string;
    url: string;
    ord_in_thread: number;
    parent_url: null;
    author: string;
    published: Date;
    title: string;
    text: string;
    highlightText: string;
    highlightTitle: string;
    highlightThreadTitle: string;
    language: Language;
    external_links: string[] | null;
    external_images: any[];
    entities: Entities;
    rating: null;
    crawled: Date;
}

export interface Entities {
    persons: Location[];
    organizations: Location[];
    locations: Location[];
}

export interface Location {
    name: string;
    sentiment: Sentiment;
}

export enum Sentiment {
    Negative = "negative",
    Neutral = "neutral",
    None = "none",
}

export enum Language {
    English = "english",
}

export interface Thread {
    uuid: string;
    url: string;
    site_full: string;
    site: string;
    site_section: string;
    site_categories: string[];
    section_title: string;
    title: string;
    title_full: string;
    published: Date;
    replies_count: number;
    participants_count: number;
    site_type: SiteType;
    country: Country;
    spam_score: number;
    main_image: null | string;
    performance_score: number;
    domain_rank: number | null;
    social: Social;
}

export enum Country {
    Co = "CO",
    Empty = "",
    GB = "GB",
    In = "IN",
    Us = "US",
}

export enum SiteType {
    Blogs = "blogs",
    Discussions = "discussions",
    News = "news",
}

export interface Social {
    facebook: Facebook;
    gplus: Gplus;
    pinterest: Gplus;
    linkedin: Gplus;
    stumbledupon: Gplus;
    vk: Gplus;
}

export interface Facebook {
    likes: number;
    comments: number;
    shares: number;
}

export interface Gplus {
    shares: number;
}
