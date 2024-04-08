export class Github {
    constructor(){
        this.client_id = "c71cee1e2cd17bd54c70";
        this.client_secret = "be8c6aaea93499ad848d56591108ab38332c9f52";
        this.per_page = 10;
        this.sort= "asc"
    }
    async fetchUserData(username){
        const profileRes = await fetch(
            `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            );
            const repoRes= await fetch( 
                `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`);
            
           const data= await profileRes.json();
           const repos = await repoRes.json();
         
           return {data, repos};
    }
}