
export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.tags = data.tags
        this.published = data.published || true
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }
}

    // let blog = {
    //     "_id": "6479970851bd2ea835346d52",
    //     "title": "lkjlkj; kjk ;l",
    //     "body": "lk;j lkj ;",
    //     "tags": [

    //     ],
    //     "published": true,
    //     "creatorId": "646424169346a51b7a721e71",
    //     "createdAt": "2023-06-02T07:15:20.111Z",
    //     "updatedAt": "2023-06-02T07:15:20.111Z",
    //     "__v": 0,
    //     "creator": {
    //         "_id": "646424169346a51b7a721e71",
    //         "subs": [
    //             "auth0|64642415f08ca733ba91e9c5"
    //         ],
    //         "email": "oldgreggslist@gmail.com",
    //         "name": "Code-y BeepBoop",
    //         "picture": "https://68.media.tumblr.com/66dd12f943a2496adcb6d556025a2d96/tumblr_oklf80RKa21shq9dbo1_400.gif",
    //         "bio": "I am the world's first and foremost Blog-fessional.\nOthers boy down to by mind-bloggling blog-mind.\nFavorite Band: Blogging Molly\nFavorite Hobby: Blogging about code\nFavorite Book: Blogging about Code Hobbies\nFavorite Blog: Why books that are about finding new hobbies always lead back to blogging about code\nMost Prized Posession: My milk shoes. Hands down.",
    //         "coverImg": "https://ih1.redbubble.net/image.496029609.3857/flat,750x1000,075,t.jpg",
    //         "github": "https://www.github.com/AJVancattenburch",
    //         "linkedin": "https://www.linkedin/anthonyvancattenburch/",
    //         "resume": "",
    //         "class": "",
    //         "graduated": false,
    //         "createdAt": "2023-05-17T00:47:40.733Z",
    //         "updatedAt": "2023-06-04T18:54:28.076Z",
    //         "__v": 0,
    //         "id": "646424169346a51b7a721e71"
    // } 