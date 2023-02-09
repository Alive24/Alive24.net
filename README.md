# Alive24.net

本站立项于2023-01-07，使用`Vue 3` + `Nuxt 3` + `DaisyUI` + `TailwindCSS`开发，作为我的个人网站，用于支持我的自由职业者生涯发展（包括展示业务、更新动态），以及发布我的写作内容。

## 运维 DevOps
- 本站为全静态。为了未来可能接入国内公众号提前进行备案，并进行了境内境外分流。
- 境外站点使用Vercel直接根据commit构建，境内计划使用`Jenkins` + `Docker`自动部署，或使用OSS。
- Jenkins - Blue Ocean
    - `docker run -d -p 8080:8080 jenkinsci/blueocean`


## ToDo：
### Dev
1. 2023-02-02
    - [] 处理所有报错。
    - [] Post与Page内容分类标签过滤
    - [] 关于页面的Sections部分
    - [x] 配图部分
2. 2023-02-05
    - [x] 标题固定
3. 2023-02-07
    - [] 按地区显示备案
4. 2023-02-09
    - [] 整理使用Portainer + Webhook部署的方案描述
    - [] 整理Docker网络与nginx部署的方案描述
    - [x] 使用CDN加速
    - [] 诊断为何安卓微信访问出现CSS丢失


### Content
1. 2023-02-02
    - [x] 更新联系信息。
    - [] 更新关于页面。
    - [x] 更新已有文章配图
2. 2023-02-05
    - [] Items的简介补完




Jenkins
```
docker run \
  --name jenkins-docker \
  --detach \
  --privileged \
  --network decent \
  --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --publish 2376:2376 \
  docker:dind \
  --storage-driver overlay2
```