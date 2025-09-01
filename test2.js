let download = require('download-git-repo')



// download('direct:git@gitee.com:tanyue/translate-google-plugin.git', 'test/tmp', function (err) {
//   console.log(err ? 'Error' : 'Success')
// })

//let gitUrl='https://gitee.com/tanyue/translate-google-plugin.git';
let gitUrl='https://gitee.com/tanyue/translate-google-plugin/tree/master/img';


download('direct:'+gitUrl, 'test/tmp', { clone: true }, function (err) {
  console.log(err ? 'Error' : 'Success')
})