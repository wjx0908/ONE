export default {
  baseUrl: "http://v3.wufazhuce.com:8000",
  //十天的id列表
  idList: "/api/onelist/idlist",
  //获取当天的所有数据
  getAllById: "/api/onelist/{id}/0",

  //获取前十的文章
  getToptenRead: '/api/channel/reading/more/0',
  // getNextReading: '/api/channel/reading/more/{id}',
  //通过id获取文章详情
  getEssayById: '/api/essay/{id}',
  //通过id获取连载详情
  getSerialById: '/api/serialcontent/{id}',
  //通过id获取问答详情
  getQuestionById: '/api/question/{id}',
  
  //获取前十的音乐
  getToptenMusic: '/api/channel/music/more/0',
  // getNextMusic: '/api/channel/music/more/{id}',
  //获取音乐详情
  getMusicById: '/api/music/detail/{id}',


  //获取前十的电影
  getToptenMovie: '/api/channel/movie/more/0',
  // getNextMovie: '/api/channel/movie/more/{id}',
  //获取电影详情
  getMovieById: '/api/movie/{id}/story/1/0',
  //获取电影详情轮播图
  getMovieBannerById: '/api/movie/detail/{id}'
  
};
