/**
 * Created by lanfeng on 2016/5/10.
 */

var SERVER_BAS_URL = process.env.API_URL
// var PROJECT_NAME = 'webapp'

var REQUESTDATA = {
  "api_version": '2.0.2',
  // "appkey": "b694b7cb8fb707fc",
  // "appsecret": "7c1143beb2f63ff8ca436d1cd87ea92d"
};
/*
 * 日志级别配置
 * OFF、ERROR、WARN、INFO、DEBUG、ALL
 */
var debug = process.env.NODE_ENV === 'production' ? 'OFF' : 'ALL'

export {
  SERVER_BAS_URL,
  REQUESTDATA,
  debug
  // PROJECT_NAME
}
