export class Article {
    constructor(public title: string, public link: string, public votes: number = 0) {
    }
    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }

    get domain(): string{
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split("/")[0];
        }catch(err) {
            return null;
        }
    }
}