//const Gitee = require('gitee-client');
const axios = require('axios');
const fs=require('fs');

const GITEE_HOST = 'https://gitee.com';
const GITEE_BASIC = GITEE_HOST + '/api/v5';




class Gitee{
    constructor(token) {
        this.host = 'https://gitee.com';
        this.token = token;
        //this.gitee = new Gitee(token);
    }
    /**
    * 构建完整的URL
    *
    * @param {string} url - 需要拼接的URL路径
    * @returns {string} - 拼接完整的URL
    */
    bulidUrl(url) {
        url = GITEE_BASIC + url;
        url += '?access_token=' + GITEE_TOKEN;
        //url += '&recursive=1';
        
        return url;
    }
    /**
    * 异步获取数据
    *
    * @param {string} url - 请求的URL地址
    * @param {Object} params - 请求参数
    * @returns {Promise<any>} - 返回请求到的数据
    */
    async get(url, params) {
        url = this.bulidUrl(url);
        let httpResult = await axios.get(url, params).catch(console.log);
        return httpResult.data
    }
    async post(url, params) {
        return await this.gitee.post(url, params).catch(console.log)
    }
    async put(url, params) {
        return await this.gitee.put(url, params).catch(console.log)
    }
    async delete(url, params) {
        return await this.gitee.delete(url, params).catch(console.log)
    }


    /**
    * 解析Git仓库URL，提取仓库所有者和仓库名称
    *
    * @param {string} gitrepoUrl - Git仓库的URL
    * @returns {Object} 包含仓库所有者和仓库名称的对象
    * @throws {Error} 如果提供的URL无效，则抛出错误
    */
    parseGitRepoUrl(gitrepoUrl, branch = 'master') {
        const regex = /https:\/\/gitee\.com\/([^/]+)\/([^/]+)\.git/;
        const match = gitrepoUrl.match(regex);

        if (match) {
            const owner = match[1];
            const repoName = match[2];
            return { owner, repoName, branch };
        } else {
            throw new Error('Invalid Git repository URL');
        }
    }

    /**
    * 获取指定Git仓库的目录树结构
    *
    * @param gitrepoUrl Git仓库的URL
    * @param branch 需要获取的分支名称，默认为'master'
    * @returns 返回Promise对象，解析后包含仓库目录树结构
    */
    async getRepoTree(gitrepoUrl, branch = 'master') {
        let parse_data = this.parseGitRepoUrl(gitrepoUrl, branch);
        let url = `/repos/${parse_data.owner}/${parse_data.repoName}/git/trees/${branch}`;
        return await this.get(url).catch(console.log);

    }
    async downloadGit(gitrepoUrl, save_path='') {
      
    }
}

//使用
const GITEE_TOKEN = '13a2b97c2a405cba372a7a4e3c307b20';
let gitee= new Gitee(GITEE_TOKEN);


// let res= gitee.getRepoTree('https://gitee.com/dromara/go-view.git')
// res.then(console.log)






