let download = require('download-git-repo')
const fs = require('fs');
const path = require('path');

async function downloadGiteeFolder(repoUrl, folderName, savePath) {
    try {
        // 克隆仓库到临时目录
        const tempDir = path.join(__dirname, 'temp-repo');
        savePath=path.join(__dirname, savePath);
       


        // await download('direct:'+repoUrl, tempDir, { clone: true }, function (err) {
        //     console.log(err ? 'Error' : 'Success')
        // })

        // 提取特定文件夹到目标路径
        const sourceFolder = path.join(tempDir, folderName);
        if (fs.existsSync(sourceFolder)) {
            fs.copyFileSync(sourceFolder, savePath);
            console.log(`Folder ${folderName} copied to ${savePath}`);
        } else {
            console.error(`Folder ${folderName} not found in the repository.`);
        }

        // 清理临时目录（可选）
        // fs.rmdirSync(tempDir, { recursive: true });
    } catch (error) {
        console.error(`Error downloading folder: ${error.message}`);
    }
}

// 使用示例
downloadGiteeFolder('https://gitee.com/dromara/go-view.git', 'plop', './plop');